import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginScreen from "../login/login_screen";
import ProfileScreen from "../profile/profile_screen";
import Constants from "../commons/constants";
import ProductListScreen from "../product_list/product_list_screen";
import ProductDetailScreen from "../product_detail/product_detail_screen";

export default class AppRouter extends React.Component {
    render(): React.ReactNode {
        return <Router>
            <div className="App">
                <Routes>
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/products" element={<ProductListScreen />} />
                    <Route path="/product" element={<ProductDetailScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/" element={this.getLoginStatus()} />
                    <Route path="/*" element={this.getLoginStatus()} />
                </Routes>
            </div>
        </Router>;
    }

    private getLoginStatus(): JSX.Element {
        const savedUserName = localStorage.getItem(Constants.USERNAME);

        return <Navigate to={savedUserName ? "/profile" : "/login"} />;
    }
}