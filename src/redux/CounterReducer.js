import { add, minus } from "./CounterAction"

const initialState = {
    count : 21
}

const CounterReducer = (state = initialState, action) => {
    switch(action.type){
        case add: return {
            count : state.count+1
        }
        case minus: return{
            count : state.count-1
        }
        default: return state
    }
}

export default CounterReducer
