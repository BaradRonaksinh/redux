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
        case upd: return{
            ...state,
            data:state.data.map((i,index)=>{
                if(index==action.payload.id){
                    i.name=action.payload.data.name
                    i.age=action.payload.data.age
                }
                return i
            })
        }
        // case upd: {
        //     let res = state.data.map((i,index) => {
        //         if(index==action.payload.id){
        //             i.name=action.payload.name
        //             i.age=action.payload.age
        //         }
        //         return i
        //     })
        // }
        default: return state
    }
}

export default UserReducer
