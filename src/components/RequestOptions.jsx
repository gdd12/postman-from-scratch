import React from 'react';
import '../styles/RequestOptions.css'
import { authorizationValues } from '../constants/authorization';

export const Params = () => {
  return (
    <div className="params-section">
      Query Params
      <div>
        <input type="text" placeholder="Param Key" />
        <input type="text" placeholder="Param Value" />
      </div>
    </div>
  );
};

export const Authorization = () => {
  return (
    <div className="authorization-section">
      Auth Type
      <div>
        <select className="authorization-dropdown">
          {authorizationValues.map((authType, index) => (
            <option value={authType}>{authType}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const Headers = () => {
  return (
    <div className="headers-section">
      <div>
        <input type="text" placeholder="Header Key" />
        <input type="text" placeholder="Header Value" />
      </div>
    </div>
  );
};

export const Body = () => {
  return (
    <div className="body-section">
      <div>
        <input type="text" placeholder="Body" />
      </div>
    </div>
  );
};