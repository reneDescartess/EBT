import { newContextComponents } from "@drizzle/react-components";
import React, {useContext, useEffect,useState } from 'react'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar';
import ConvertPanel from '../components/ConvertPanel';
import './ExchangePage.css';

const { AccountData, ContractData, ContractForm } = newContextComponents;

const ExchangePage =({ drizzle, drizzleState }) => {
    // destructure drizzle and drizzleState from props
    const [input, setInput] = useState(null);
    const [exchangeRate, setExchangeRate] = useState(2333); 
    const [from, setFrom] = useState("FRAX"); 
    const [to, setTo] = useState("ETH"); 
    return (
        <div>
            <NavBar/>
            <div className='form-wrapper'>
                <ConvertPanel/>
                <ConvertPanel/>
                <div className='price-panel'>
                    <p className='left-text'>Price</p>
                    <p className='right-text'>{exchangeRate} {from} per {to}</p>
                </div>
                <button className='submit'>Swap</button>

            </div>



            
        </div>

    );
}

export default ExchangePage;