export default class LoginState {
    isLoading: boolean = false;
    username: string = "";
    password: string = "";

    get isLoginButtonEnabled(): boolean {
        return this.username.length > 0 && this.password.length > 0;
    }
}