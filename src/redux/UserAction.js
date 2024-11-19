// Inseret
export const add = "INSERT"
// Display
export const disp = "DISPLAY"
// Update
export const upd = "UPDATE"
// Delete
export const del = "DELETE"

export const addfun = (data) => {
    return{
        type :add,
        payload:data
    }
}

export const dispfun = () => {
    return {type:disp}
}

export const delfun = () => {
    return{
        type:del,
        payload:id
    }
}

export const updfun = (id,data) => {
    return{
        type:upd,
        payload:{id,data}
    }
}

// export const minusfun = () => {
//     return{
//         type: minus
//     }
// }