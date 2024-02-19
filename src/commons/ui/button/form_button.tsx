import React from "react";
import LoadingWidget from "../loading/loading_widget";

import "./form_button.css";

interface Props {
    title: string;
    isLoading?: boolean;
    action?: () => void;
    enabled?: boolean;
    backgroundColor?: string;
}

export default class FormButton extends React.Component<Props> {
    render() {
        return <button 
            className="FormButton"
            onClick={this.props.isLoading ? undefined : this.props.action} 
            disabled={!this.props.enabled}
            style={{
                backgroundColor:
                    (this.props.enabled ?? true) 
                        ? (this.props.backgroundColor ?? "var(--purple)") 
                        : "#E8E8E8",
                color:(this.props.enabled ?? true) 
                    ? "white" 
                    : "#D3D3D3",
            }}
        >
            {
                (this.props.isLoading) ?
                    <LoadingWidget /> :
                    <>{this.props.title}</>
            }
        </button>;
    }
}