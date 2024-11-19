import { add, del, upd } from "./UserAction"

const initialState = {
    data : []
}

const UserReducer = (state = initialState, action) => {
    switch(action.type){
        case add: return {
            ...state,
            data:[...state.data,action.payload]
        }
        case del: return{
            ...state,
            data:state.data.filter((i,index) => {
                return index!= action.payload
            })
        }
        default: return state
    }
}

export default UserReducer
