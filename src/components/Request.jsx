import React, {useState} from 'react'
import { methodList } from '../constants/methods';
import SendRequest from '../api/SendRequest';
import '../styles/Request.css'

// https://api.freeapi.app/api/v1/public/randomusers

function Request() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState("")

  const handleMethodChange = (e) => {
    setMethod(e.target.value)
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const sendRequest = async () => {
    try {
      const responseData = await SendRequest({method, url});
      setResponse(responseData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse({ error: error.message });
    }
  };

  return(
    <>
      <div className="request-configuration">
        <select className="method-input" value={method} onChange={handleMethodChange}>
          {Object.keys(methodList).map((method,index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
        <input className="url-input" value={url} onChange={e => handleUrlChange(e)} type="url" placeholder="Enter URL or paste text"/>
        <div className="button-group">
          <button onClick={sendRequest}>SEND</button>
          <button onClick={() => {setResponse("")}}>CLEAR</button>
        </div>
      </div>
      <div className="response-data">
        {response && (
          <div>
            <h2>Response:</h2>
            <pre className="response-text-area">{JSON.stringify(response)}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default Request;