import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './ConvertPanel.css';

function ConvertPanel(props){
    const [balance,setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [token, setToken] = useState("ETH");

    return (
        <div className='wrapper'>
            <div className='left'>
                <p className='upper-text'>Balance: {balance}</p>
                <p className='amount'>{amount}</p>
            </div>
            <div className='right'>
                <p className='upper-text'>From</p>
                <button className='token-selection'>
                    <p className='token-name'> {token} </p>
                </button>
            </div>
        </div>
    )

}

export default ConvertPanel;