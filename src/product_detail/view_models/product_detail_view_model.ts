import { ProductModel } from "../../commons/models/product_model";
import ApiService from "../../commons/services/api_service";
import ViewModel from "../../commons/ui/view_model";
import { getLocationQueries } from "../../commons/utils";
import ProductDetailState from "./product_detail_state";

export default class ProductDetailViewModel extends ViewModel<ProductDetailState> {
    productId = +getLocationQueries()["id"];

    constructor() {
        super(new ProductDetailState());
    }

    loadProductDetail() {
        this.emit((state) => state.isLoading = true);

        ApiService.fetch<{}, ProductModel[]>(
            "https://fakestoreapi.com/products/", {
            onSuccess: (response) => {
                this.emit((state) => {
                    // Find the product based on the id
                    let otherProducts: ProductModel[] = [];

                    for (let index = 0; index < response.length; index++) {
                        if (response[index].id === this.productId) {
                            state.model = response[index];
                            console.log(response[index]);
                        } else {
                            otherProducts.push(response[index]);
                        }
                    }
                    state.otherModel = otherProducts;
                    state.isLoading = false;
                })
            },
            onFailure: (error) => {
                // TODO: handle error
                console.log(error);
            }
        });
    }
}