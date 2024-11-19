import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun } from './redux/UserAction'

const UserCrudcomponent = () => {
    const dispatch = useDispatch()
    const alldata = useSelector((state) => state.data)
    const [data, setData] = useState({
        id:"",
        name:"",
        age:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e) => {
        e.preventDefault()
        dispatch(addfun(data))
    }
  return (
    <div>
      <h3>User CRUD Component</h3>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name='name' id='iName' onChange={handleChange} value={data.name} /> <br />
        <label htmlFor="">Age:</label>
        <input type="number" name='age' id='iAge' onChange={handleChange} value={data.age}/> <br />
        <input type="submit" name='save' id='iSave' /><br /><br />
      </form>
    </div>
  )
}

export default UserCrudcomponent
