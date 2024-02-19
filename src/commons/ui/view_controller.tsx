import React from "react";
import ViewModel from "./view_model";

interface ViewControllerState<State, VM extends ViewModel<State>> {
    viewModel: VM;
}

export default class ViewController<Props, State, VM extends ViewModel<State>> extends React.Component<Props, ViewControllerState<State, VM>> {
    get viewModel(): VM {
        return this.state.viewModel;
    }

    get vmState(): State {
        return this.state.viewModel.state;
    }

    constructor(props: Props, viewModel: VM) {
        super(props);

        this.state = {
            viewModel: viewModel,
        };

        this.viewModel.emit = (action: (state: State) => void) => {
            action(this.viewModel.state);

            this.setState({
                viewModel: this.state.viewModel
            });
        };
    }
}