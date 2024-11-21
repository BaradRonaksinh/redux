import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun, delfun, updfun } from './redux/UserAction'

const UserCrudcomponent = () => {
  const dispatch = useDispatch()
  const alldata = useSelector((state) => state.data)
  const [data, setData] = useState({
    id: "",
    name: "",
    age: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const saveData = (e) => {
    e.preventDefault()
    if (data.id != '') {
      dispatch(updfun(data.id,data))
    } else {
      dispatch(addfun(data))
    }
  }

  //edit
  const editData = (id) => {

    let res = alldata.find((i, index) => index == id)

    console.log(res);
    setData({
      id: id, //changes...
      name: res.name,
      age: res.age
    })
  }
  return (
    <div>
      <h3>User CRUD Component</h3>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name='name' id='iName' onChange={handleChange} value={data.name} /> <br />
        <label htmlFor="">Age:</label>
        <input type="number" name='age' id='iAge' onChange={handleChange} value={data.age} /> <br />
        <input type="submit" name='save' id='iSave' /><br /><br />
      </form>

      <table>
        <tbody>

          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>

          {
            alldata.map((i, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.name}</td>
                  <td>{i.age}</td>
                  <td>
                    <button onClick={() => editData(index)}>Edit</button>
                    <button onClick={() => dispatch(delfun(index))}>Delete</button>
                  </td>


                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserCrudcomponent
