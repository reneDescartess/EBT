import { newContextComponents } from "@drizzle/react-components";
import React, {useContext, useEffect,useState, Fragment } from 'react'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar';
import ConvertPanel from '../components/ConvertPanel';
import './ExchangePage.css';

const { AccountData, ContractData, ContractForm } = newContextComponents;

const ExchangePage =({ drizzle, drizzleState }) => {
    function precise(x) {
        return Number.parseFloat(x).toPrecision(4);
      }
      
    // destructure drizzle and drizzleState from props
    const EBT_USD=1;
    const FRAX_USD=0.989;
    const ETH_USD=1296.3;
    const [input, setInput] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(0); 
    const [from, setFrom] = useState("none"); 
    const [to, setTo] = useState("none"); 
    useEffect(()=>{
        switch(from + to){
            case "none"+"none":
                setExchangeRate(0)
                break;
            case "EBT"+"FRAX":
                setExchangeRate(FRAX_USD/EBT_USD)
                break;
            case "EBT"+"ETH":
                setExchangeRate(ETH_USD/EBT_USD)
                break;
            case "FRAX"+"EBT":
                setExchangeRate(EBT_USD/FRAX_USD)
                break;
            case "FRAX"+"ETH":
                setExchangeRate(ETH_USD/FRAX_USD)
                break;
            case "ETH"+"FRAX":
                setExchangeRate(FRAX_USD/ETH_USD)
                break;
            case "ETH"+"EBT":
                setExchangeRate(EBT_USD/ETH_USD)
                break;
            case "ETH"+"ETH" :
                setExchangeRate(1)
                break;
            case "EBT"+"EBT" :
                setExchangeRate(1)
                break;
            case "FRAX"+"FRAX":
                setExchangeRate(1)
                break;
        }

    },[from,to]);
    return (
        <div>
            <NavBar/>
            <div className='box margin-top-100 ml-5 mr-5'>
                <ConvertPanel input={input} setInput={setInput} exchangeRate={exchangeRate} setExchangeRate={setExchangeRate}
                from={from} setFrom={setFrom} to={to} setTo={setTo}/>
               
                <div className='is-flex flex-direction-row is-justify-content-space-evenly'>
                    <p >Price</p>
                    <p >{precise(exchangeRate)} {from} per {to}</p>
                </div>
                {/* <button className='submit'>Swap</button> */}
                <div class="is-flex is-justify-content-center">
                <a class="button has-text-white is-primary ">Swap</a>

                </div>
                

            </div>



            
        </div>

    );
}

export default ExchangePage;