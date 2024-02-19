import { Component, ReactNode } from "react";
import { TransactionModel } from "../models/profile_dummy_model";
import { ProductDict } from "../view_models/profile_state";

type Props = {
    model: TransactionModel;
    productDict: ProductDict;
};

export default class ProfileTransactionCellWidget extends Component<Props> {
    render(): ReactNode {
        const productDict = this.props.productDict;
        const model = this.props.model;
        const firstProduct = productDict[model.purchasedProducts[0].id];
        const purchasedProductLength = model.purchasedProducts?.length ?? 0;

        let totalQty = 0;
        let totalPrice = 0;

        model.purchasedProducts.forEach((model) => {
            totalQty += model.qty;
            totalPrice += model.qty * (productDict[model.id]?.price ?? 0);
        });

        return <div className="TransactionCellWidget">
            <img src={firstProduct?.image} alt={firstProduct?.title} />
            <div>
                <p className="Title">{firstProduct?.title + (purchasedProductLength > 1 ? ` (+ ${model.purchasedProducts.length - 1} products)` : "")}</p>
                <p className="Quantity">Total qty: {totalQty}</p>
                <p className="Price">${totalPrice}</p>
                <p className="BuyerInfo">Buyer: {model.buyerName}</p>
            </div>
        </div>;
    }
}