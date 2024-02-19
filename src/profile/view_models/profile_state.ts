import { ProductModel } from "../../commons/models/product_model";
import { TransactionModel, dummyTransactions } from "../models/profile_dummy_model";

export type ProductDict = {
    [key: number]: ProductModel;
};

export default class ProfileState {
    isLoading = false;
    transactions: TransactionModel[] = dummyTransactions;
    productDictionary?: ProductDict = undefined;
}