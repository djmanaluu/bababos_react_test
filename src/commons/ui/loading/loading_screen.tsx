import { Component, ReactNode } from "react";
import LoadingWidget from "./loading_widget";

import "./loading.css";

interface Props {
    backgroundColor?: string;
    indicatorColor?: string;
}

export default class LoadingStateView extends Component<Props> {
    render(): ReactNode {
        return <div id="LoadingScreenContainer" style={{backgroundColor: this.props.backgroundColor ?? "#00000077"}}>
            <LoadingWidget color={this.props.indicatorColor} />
        </div>;
    }
}