import { ReactNode } from "react";
import ViewController from "../commons/ui/view_controller";
import ProductDetailState from "./view_models/product_detail_state";
import ProductDetailViewModel from "./view_models/product_detail_view_model";
import Scaffold from "../commons/ui/scaffold/scaffold";
import BaseAppBar from "../commons/ui/app_bar/app_bar";

import "./product_detail_screen.css";

import star from "../assets/images/star.svg";
import ProductCellWidget from "../product_list/widgets/product_cell_widget";

export default class ProductDetailScreen extends ViewController<{}, ProductDetailState, ProductDetailViewModel> {
    constructor(props: {}) {
        super(props, new ProductDetailViewModel());
    }

    componentDidMount() {
        this.viewModel.loadProductDetail();
    }

    render(): ReactNode {
        const model = this.vmState.model;

        return <Scaffold
            appBar={<BaseAppBar />}
            isLoading={this.vmState.isLoading}
            loadingBackgroundColor="white"
            loadingIndicatorColor="var(--dark-grey)"
        >
            {
                model &&
                <div id="ProductDetailContainer">
                    <img src={model.image} alt={model.title} />
                    <div>
                        <p className="Title">{model.title}</p>
                        <div className="Category">{model.category}</div>
                        <p className="Rating"><span><img src={star} alt="" /></span>{model.rating.rate} ({model.rating.count} reviews)</p>
                        <p className="Price">${model.price}</p>
                        <p className="Description">{model.description}</p>
                    </div>
                </div>
            }
            <div id="OtherProductContainer">
                <p>Other Products</p>
                <div>
                    {
                        this.vmState.otherModel.map((model) => <ProductCellWidget key={model.id}  model={model} />)
                    }
                </div>
            </div>
        </Scaffold>;
    }
}