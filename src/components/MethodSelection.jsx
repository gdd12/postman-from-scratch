import React, {useState} from 'react'
import { methodList } from '../constants/methods';

function MethodSelection() {
  const [method, setMethod] = useState("GET")

  const handleChange = (e) => {
    console.log(`Method changed to: ${e.target.value}`)
    setMethod(e.target.value)  
  };

  return (
    <>
      <select value={method} onChange={handleChange}>
        {methodList.map((method,index) => (
          <option key={index} value={method}>
            {method}
          </option>
        ))}
      </select>
    </>
  )
}

export default MethodSelection;