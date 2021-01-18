import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import "./App.css";
import Web3 from 'web3';
import web3 from './web3';
const drizzle = new Drizzle(drizzleOptions);
/* global BigInt */
//force the browser to connect to metamask upon entering the site
window.addEventListener('load', async () => {
  // Modern dapp browsers...
  if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
          // Acccounts now exposed
          window.ethereum.enable();
          const accounts = await web3.eth.requestAccounts();
          web3.eth.sendTransaction({/* ... */});
      } catch (error) {}
  }
  // Legacy dapp browsers...
  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */});
  }
  // Non-dapp browsers...
  else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
});
const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
            <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
