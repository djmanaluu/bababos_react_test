import { ReactNode } from "react";
import ViewController from "../commons/ui/view_controller";
import LoginState from "./view_models/login_state";
import LoginViewModel from "./view_models/login_view_model";
import Scaffold from "../commons/ui/scaffold/scaffold";
import FormButton from "../commons/ui/button/form_button";

import "./login_screen.css";

import logo from "../assets/images/big_logo.svg";

export default class LoginScreen extends ViewController<{}, LoginState, LoginViewModel> {
    constructor(props: {}) {
        super(props, new LoginViewModel());
    }

    render(): ReactNode {
        return <Scaffold>
            <div id="LoginScreenContainer">
                <img src={logo} alt="big logo" />
                <input 
                    className="FormTextInput"
                    type="text"
                    autoComplete="off"
                    value={this.vmState.username}
                    onChange={(event) => this.viewModel.onUsernameChanged(event)}
                    placeholder="Enter your username"
                />
                <input 
                    className="FormTextInput"
                    type="password"
                    autoComplete="off"
                    value={this.vmState.password}
                    onChange={(event) => this.viewModel.onPasswordChanged(event)}
                    placeholder="Secret Password"
                />
                <FormButton 
                    title="Login"
                    isLoading={this.vmState.isLoading} 
                    action={() => this.viewModel.login({
                        onSuccess: this.onLoginSuccess
                    })} 
                    enabled={this.vmState.isLoginButtonEnabled}
                />
            </div>
        </Scaffold>
    }

    onLoginSuccess(): void {
        window.location.href = "/";
    }
}