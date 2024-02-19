import { ReactNode } from "react";
import Scaffold from "../commons/ui/scaffold/scaffold";
import BaseAppBar from "../commons/ui/app_bar/app_bar";
import FormButton from "../commons/ui/button/form_button";
import ViewController from "../commons/ui/view_controller";
import ProfileState from "./view_models/profile_state";
import ProfileViewModel from "./view_models/profile_view_model";

import "./profile_screen.css";
import ProfileTransactionCellWidget from "./widgets/profile_transaction_cell_widget";

export default class ProfileScreen extends ViewController<{}, ProfileState, ProfileViewModel> {
    constructor(props: {}) {
        super(props, new ProfileViewModel());
    }

    componentDidMount(): void {
        this.viewModel.loadProductDetail();
    }

    render(): ReactNode {
        console.log(this.vmState.transactions)
        return <Scaffold
            appBar={
                <BaseAppBar selectedMenu="profile" />
            }
            isLoading={ this.vmState.isLoading }
            loadingBackgroundColor="white"
            loadingIndicatorColor="var(--dark-grey)"
        >
            <div id="ProfileScreenContainer">
                <div id="ProfileStoreSection">
                    <p id="CompanyName">PT Toko Kelontong Mak Ijah</p>
                    <p id="Address">Jl Belawai Timur, Gg Ahmad Kadir, No 74, Jakarta Timur</p>
                    <p id="Phone">Phone: (+62) 8812 2434 4432</p>
                    <p id="Email">Email: marketing@mak-ijah.com</p>
                    <FormButton title="Log Out" backgroundColor="red" action={() => {}} />
                </div>
                <div id="ProfileTransactionSection">
                    {   
                        (this.vmState.transactions ?? {}).length > 0 &&
                        this.vmState.transactions.map((model) => 
                            <ProfileTransactionCellWidget 
                                key={model.id}
                                model={model} 
                                productDict={this.vmState.productDictionary ?? {}} 
                            />
                        )
                    }
                </div>
            </div>
        </Scaffold>;
    }
}