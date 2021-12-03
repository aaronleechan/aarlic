import { AnyAction } from 'redux';
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../actions/counterActions';


export interface CounterState {
    value: number;
}

const initialState: CounterState={
    value: 0
}

const counterReducer = (state: CounterState = initialState, action: AnyAction) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;