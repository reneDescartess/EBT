import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import "./App.css";
import Web3 from 'web3';
import web3 from './web3';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import history from "./history";
import ExchangePage from "./pages/ExchangePage";
import AboutPage from './pages/About';
import {EyeOutlined,MailOutlined, MessageOutlined, SettingOutlined,} from '@ant-design/icons';
import { Menu,Space,Input } from 'antd';

const drizzle = new Drizzle(drizzleOptions);
const { Search } = Input;
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

            <Router history={history}>
              <Switch>
              <Route exact path="/">
                    <ExchangePage drizzle={drizzle} drizzleState={drizzleState} />
                </Route>
                <Route exact path="/example">
                    <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
                </Route>   
                <Route exact path="/about">
                    <AboutPage drizzle={drizzle} drizzleState={drizzleState} />
                </Route>   
              </Switch>
            </Router>
                
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
