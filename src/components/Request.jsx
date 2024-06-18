import React, {useState} from 'react'
import { methodList } from '../constants/methods';

function Request() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")

  const handleMethodChange = (e) => {
    console.log(`Method changed to: ${e.target.value}`)
    setMethod(e.target.value)
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const sendRequest = () => {
    console.log(method, url)
  }

  return(
    <>
    {/* {Selecting the method of the HTTP request} */}
      <select value={method} onChange={handleMethodChange}>
        {methodList.map((method,index) => (
          <option key={index} value={method}>
            {method}
          </option>
        ))}
      </select>
      <input value={url} onChange={e => handleUrlChange(e)} type="url" placeholder="Enter URL or paste text"/>
      <button onClick={sendRequest}>SEND</button>
    </>
  )
}

export default Request;