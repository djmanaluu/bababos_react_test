import { ProductModel } from "../../commons/models/product_model";
import APIService from "../../commons/services/api_service";
import ViewModel from "../../commons/ui/view_model";
import ProductListState from "./product_list_state";

export default class ProductListViewModel extends ViewModel<ProductListState> {
    constructor() {
        super(new ProductListState());
    }

    loadProducts() {
        this.emit((state) => state.isLoading = true);

        APIService.fetch<{}, ProductModel[]>(
            "https://fakestoreapi.com/products/", {
            onSuccess: (response) => {
                this.emit((state) => {
                    state.products = response;
                    state.isLoading = false;
                });
                console.log(response)
            },
            onFailure: (error) => {
                // TODO: handle error
                console.log(error);
            }
        }
        )
    }
}