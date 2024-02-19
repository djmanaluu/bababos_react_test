import { Component, ReactNode } from "react";

import logo from "../../../assets/images/small_logo.svg";
import underline from "../../../assets/images/underline.svg";

import "./app_bar.css";

export type MenuKind =  "product_list" | "profile";

interface Props {
    selectedMenu?: MenuKind;
}

export default class BaseAppBar extends Component<Props> {
    render(): ReactNode {
        return <div id="AppBarContainer">
            <a href="/">
                <img src={logo} alt="small logo" />
            </a>
            <div className="Spacer" />
            <MenuButton
                href="/products"
                title="Product List"
                menuId="product_list"
                selectedMenuId={this.props.selectedMenu}
            />
            <MenuButton
                href="/profile"
                title="Profile"
                menuId="profile"
                selectedMenuId={this.props.selectedMenu}
            />
        </div>
    }
}

interface MenuButtonProps {
    href: string;
    title: string;
    menuId: MenuKind;
    selectedMenuId?: MenuKind;
}

class MenuButton extends Component<MenuButtonProps> {
    render(): ReactNode {
        const isSelected = this.props.menuId === this.props.selectedMenuId;
        return <a 
            className={ isSelected ? "Selected" : "Unselected" }
            href={ this.props.href }
        >
            { this.props.title }
            { 
                isSelected &&
                    <img src={underline} alt="" />
            }
        </a>;
    }
}