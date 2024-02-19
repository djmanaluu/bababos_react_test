import React from "react";
import ViewModel from "../../commons/ui/view_model";
import LoginState from "./login_state";
import Constants from "../../commons/constants";

export default class LoginViewModel extends ViewModel<LoginState> {
    constructor() {
        super(new LoginState());
    }

    onUsernameChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.emit((state) => state.username = event.target.value);
    }

    onPasswordChanged(event: React.ChangeEvent<HTMLInputElement>) {
        this.emit((state) => state.password = event.target.value);
    }

    login(args: { onSuccess: () => void }) {
        console.log("testing");
        this.emit((state) => state.isLoading = true);

        setTimeout(() => {
            localStorage.setItem(Constants.USERNAME, this.state.username);

            this.emit((state) => state.isLoading = false);

            args.onSuccess();
        }, 1500);
    }
}