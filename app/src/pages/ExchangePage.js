import { newContextComponents } from "@drizzle/react-components";
import React, {useContext, useEffect,useState, Fragment } from 'react'
import 'antd/dist/antd.css';
import NavBar from '../components/NavBar';
import ConvertPanel from '../components/ConvertPanel';
import './ExchangePage.css';
import PopUpComponent from '../components/PopUpComponent';

const { AccountData, ContractData, ContractForm } = newContextComponents;

const ExchangePage =({ drizzle, drizzleState }) => {
    /**
   * Pop up state
   */
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    //console.log(isOpen);
  };

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


    /**
     * State for deposits
     * 
     * 
     */
    const[EBT,setEBT]=useState(100);
    const[Frax,setFrax]=useState(100);
    const[ETH,setETH]=useState(100);
    function precise(x) {
        return Number.parseFloat(x).toPrecision(4);
      }
    const updateAssets=(from,to)=>{
        switch(from){
            case "ETH":
                setETH(ETH-input);
                break;
            case "EBT":
                setEBT(EBT-input);
                break;
            case "FRAX":
                setFrax(Frax-input);
                break;
        }
       
        switch(to){
            case "ETH":
                setETH(ETH+input/exchangeRate);
                break;
            case "EBT":
                setEBT(EBT+input/exchangeRate);
                break;
            case "FRAX":
                setFrax(Frax+input/exchangeRate);
                break;
        }

    }

    const handleSwap=()=>{
        togglePopup();
        updateAssets(from,to);


    }
    return (
        <div>
             {isOpen && (
                <PopUpComponent
               
                handleClose={togglePopup}
                />
            )}

            <div className='box margin-top-100 ml-5 mr-5'>
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-exchange-alt"></i>
              </span>
              <span class="has-text-weight-bold">Swap Tokens</span>
            </span>
                
                <ConvertPanel input={input} setInput={setInput} exchangeRate={exchangeRate} setExchangeRate={setExchangeRate}
                from={from} setFrom={setFrom} to={to} setTo={setTo}/>
               
                <div className='is-flex flex-direction-row is-justify-content-space-evenly'>
                    <p >Price</p>
                    <p >{precise(exchangeRate)} {from} per {to}</p>
                </div>
                {/* <button className='submit'>Swap</button> */}
                <div class="is-flex is-justify-content-center">
                <a class="button has-text-white is-primary " disabled={from!="none"&& to!="none"?false:true} onClick={handleSwap}>Swap</a>

                </div>
                <span class="icon-text mt-5 mb-5">
                <span class="icon">
                    <i class="fas fa-file-invoice"></i>
                </span>
                <span class="has-text-weight-bold">Account Details</span>
                </span>


                <div class="is-flex is-justify-content-space-between mt-2">
                    <span>EBT ($):</span>
                    <span>{EBT}</span>
                </div>
                <div class="is-flex is-justify-content-space-between mt-2">
                    <span>FRAX ($):</span>
                    <span>{Frax}</span>
                </div>
                <div class="is-flex is-justify-content-space-between mt-2">
                    <span>ETH ($):</span>
                    <span>{ETH}</span>
                </div>
                <div class="is-flex is-justify-content-space-between mt-2">
                    <span>Rate of Return: </span>
                    <span>3.5%</span>
                </div>
                

            </div>



            
        </div>

    );
}

export default ExchangePage;