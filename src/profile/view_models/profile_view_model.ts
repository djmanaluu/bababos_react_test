import { ProductModel } from "../../commons/models/product_model";
import ApiService from "../../commons/services/api_service";
import ViewModel from "../../commons/ui/view_model";
import ProfileState, { ProductDict } from "./profile_state";

export default class ProfileViewModel extends ViewModel<ProfileState> {
    constructor() {
        super(new ProfileState());
    }

    loadProductDetail() {
        this.emit((state) => state.isLoading = true);

        ApiService.fetch<{}, ProductModel[]>(
            "https://fakestoreapi.com/products/", {
            onSuccess: (response) => {
                this.emit((state) => {
                    // Find the product based on the id
                    let prodDict: ProductDict = {};
                    console.log(prodDict)
                    response.forEach((model) => {
                        prodDict[model.id] = model;
                    });

                    console.log(prodDict)

                    state.isLoading = false;
                    state.productDictionary = prodDict;
                })
            },
            onFailure: (error) => {
                // TODO: handle error
                console.log(error);
            }
        });
    }
}