import { ProductModel } from "../../commons/models/product_model";

export default class ProductDetailState {
    isLoading = true;
    model?: ProductModel;
    otherModel: ProductModel[] = [];
}