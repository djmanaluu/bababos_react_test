import { Component } from "react";

import "./loading.css";

interface Props {
    color?: string;
}

export default class LoadingWidget extends Component<Props> {
    render() {
        return (
            <div className="LoadingWidgetContainer">
                <div style={{backgroundColor: this.props.color}} />
                <div style={{backgroundColor: this.props.color}} />
                <div style={{backgroundColor: this.props.color}} />
            </div>
        );
    }
}