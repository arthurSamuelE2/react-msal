import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MsalProvider } from "@azure/msal-react";
import {  PublicClientApplication } from "@azure/msal-browser";

// MSAL configuration
const configuration = {
  auth: {
    clientId: "98db8c80-30b3-468b-a62b-370af96e084f"
  }
};

const pca = new PublicClientApplication(configuration);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
)
