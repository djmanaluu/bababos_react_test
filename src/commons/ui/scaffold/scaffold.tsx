import { Component, ReactNode } from "react";
import LoadingStateView from "../loading/loading_screen";

import "./scaffold.css";

interface Props {
    appBar?: ReactNode;
    children?: ReactNode;
    isLoading?: boolean;
    loadingBackgroundColor?: string;
    loadingIndicatorColor?: string;
}

export default class Scaffold extends Component<Props> {
    render(): ReactNode {
        return <div id="Scaffold" style={{
            height:(this.props.isLoading ?? false) ? "var(--fullscreen-height)" : undefined
        }}>
            { this.props.appBar }
            <div id="ScaffoldBody" style={{
                marginTop: this.props.appBar ? 76 : undefined
            }}>
                { this.props.children }
                { 
                    this.props.isLoading && 
                        <LoadingStateView 
                            backgroundColor={this.props.loadingBackgroundColor} 
                            indicatorColor={this.props.loadingIndicatorColor}
                        />
                 }
            </div>
        </div>
    }
}