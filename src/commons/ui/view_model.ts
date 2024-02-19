export default abstract class ViewModel<T> {
    state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }

    emit: (action: (state: T) => void) => void = (_) => { };
}