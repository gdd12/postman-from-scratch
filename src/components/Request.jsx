import React, {useState} from 'react'
import { methodList } from '../constants/methods';
import SendRequest from '../api/SendRequest';

function Request() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState("")

  const handleMethodChange = (e) => {
    console.log(`Method changed to: ${e.target.value}`)
    setMethod(e.target.value)
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const sendRequest = async () => {
    try {
      const responseData = await SendRequest({method, url});
      setResponse(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return(
    <>
      <div className="request-configuration">
        <select value={method} onChange={handleMethodChange}>
          {methodList.map((method,index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
        <input value={url} onChange={e => handleUrlChange(e)} type="url" placeholder="Enter URL or paste text"/>
        <button onClick={sendRequest}>SEND</button>
      </div>
      <div className="response-data">
        {response && (
          <div>
            <h2>Response:</h2>
            <pre className="response-text-area">{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default Request;