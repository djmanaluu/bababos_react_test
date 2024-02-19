import { ReactNode } from "react";
import Scaffold from "../commons/ui/scaffold/scaffold";
import ViewController from "../commons/ui/view_controller";
import ProductListState from "./view_models/product_list_state";
import ProductListViewModel from "./view_models/product_list_view_model";
import BaseAppBar from "../commons/ui/app_bar/app_bar";
import ProductCellWidget from "./widgets/product_cell_widget";

import "./product_list_screen.css";

export default class ProductListScreen extends ViewController<{}, ProductListState, ProductListViewModel> {
    constructor(props: {}) {
        super(props, new ProductListViewModel());
    }

    componentDidMount() {
        console.log("testing");
        this.viewModel.loadProducts();
    }

    render(): ReactNode {
        return <Scaffold
            appBar={
                <BaseAppBar selectedMenu="product_list" />
            }
            isLoading={this.vmState.isLoading}
            loadingBackgroundColor="white"
            loadingIndicatorColor="var(--dark-grey)"
        >
            <div id="ProductListScreenContainer">
                {
                    this.vmState.products.map((model) => <ProductCellWidget key={model.id} model={model} />)
                }
            </div>
        </Scaffold>;
    }
}