import { ProductModel } from "../../commons/models/product_model";

export default class ProductListState {
    products: ProductModel[] = [];
    isLoading = true;
}