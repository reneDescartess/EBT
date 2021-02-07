import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">

      <div className="box mt-5">
            <span class="icon-text mb-4">
              <span class="icon">
                <i class="fas fa-user-circle"></i>
              </span>
              <span class="has-text-weight-bold">Active Account</span>
            </span>
            < br/>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="box">
      <span class="icon-text mb-4">
              <span class="icon">
                <i class="fas fa-money-bill"></i>
              </span>
              <span class="has-text-weight-bold">EBT</span>
            </span>
            <br/>
        <p>
          <strong>Total Supply: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="TutorialToken"
            method="totalSupply"
            methodArgs={[{ from: drizzleState.accounts[0] }]}
          />{" EBT"}
        </p>
        <p>
          <strong>My Balance: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="TutorialToken"
            method="balanceOf"
            methodArgs={[drizzleState.accounts[0]]}
          />
        </p>
        <span class="icon-text mt-4 mb-4">
              <span class="icon">
                <i class="fas fa-share-square"></i>
              </span>
              <span class="has-text-weight-bold">Send Token</span>
            </span>
        <ContractForm
          drizzle={drizzle}
          contract="TutorialToken"
          method="transfer"
          labels={["To Address", "Amount to Send"]}
        />
      </div>

    
    </div>
  );
};
