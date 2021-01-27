import { newContextComponents } from "@drizzle/react-components";
import React, {useContext, useEffect,useState } from 'react'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar'
const { AccountData, ContractData, ContractForm } = newContextComponents;

const ExchangePage =({ drizzle, drizzleState }) => {
    // destructure drizzle and drizzleState from props
    return (
        <div>
            <NavBar/>



            
        </div>

    );
}

export default ExchangePage;