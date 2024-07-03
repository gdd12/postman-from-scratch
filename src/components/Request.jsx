import React, {useState} from 'react'
import { methodList } from '../constants/methods';
import SendRequest from '../api/SendRequest';
import { Authorization, Params, Headers, Body } from './RequestOptions';
import { Response } from './Response';
import '../styles/Request.css'

// https://api.freeapi.app/api/v1/public/randomusers

function Request() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState(undefined)
  const [activeTab, setActiveTab] = useState("request");

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
      console.log("Error fetching data:", error);
      setResponse({ error: error.message });
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return(
    <div className="request-wrapper">
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
          <button onClick={() => {setResponse(undefined)}}>CLEAR</button>
        </div>
      </div>

      <div className="tabs">
        <div className={activeTab === "params" ? "active-tab" : ""} onClick={() => handleTabClick("params")}>Params</div>
        <div className={activeTab === "authorization" ? "active-tab" : ""} onClick={() => handleTabClick("authorization")}>Authorization</div>
        <div className={activeTab === "headers" ? "active-tab" : ""} onClick={() => handleTabClick("headers")}>Headers</div>
        <div className={activeTab === "body" ? "active-tab" : ""} onClick={() => handleTabClick("body")}>Body</div>
      </div>

      {activeTab === "params" && <Params/>}
      {activeTab === "authorization" && <Authorization/>}
      {activeTab === "headers" && <Headers/>}
      {activeTab === "body" && <Body/>}

      <div className="response-container">
        <Response response={response}/>
      </div>
    </div>
  )
}

export default Request;