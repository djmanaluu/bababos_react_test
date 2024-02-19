import { Component, ReactNode } from "react";
import { ProductModel } from "../../commons/models/product_model";

interface Props {
    model: ProductModel;
}

export default class ProductCellWidget extends Component<Props> {
    render(): ReactNode {
        const model = this.props.model;

        return <a className="ProductCellWidget" href={`/product?id=${model.id}`}>
            <img src={model.image} alt={model.title} />
            <p>{model.title}</p>
            <p>${model.price}</p>
        </a>;
    }
}