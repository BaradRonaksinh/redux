import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addfun, minusfun } from './redux/CounterAction'

const Countercomponent = () => {
    const count = useSelector((i) => i.count)
    const dispacth = useDispatch()
    const addCounter = () => {
        dispacth(addfun())
    }
    
  return (
    <div>
      <h3>Counter componet</h3>
      <h4>Total count is -- {count}</h4>
      <button onClick={addCounter}>Add</button>
      <button onClick={() => dispacth(minusfun())}>Minus</button>
    </div>
  )
}

export default Countercomponent
