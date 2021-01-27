import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './ConvertPanel.css';

function ConvertPanel(props){
    const [balance,setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [token, setToken] = useState(null);

    return (
        <div className='wrapper'>
            <div className='left'>
                <p className='upper-text'>Balance: {balance}</p>
                <p className='amount'>{amount}</p>
            </div>
            <div className='right'>
                <p className='upper-text'>From</p>
                <div className='token-selection'>
                    <div className='token-name'>
                        <p>ETH</p>
                    </div>
                    <div className='dropdown'>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default ConvertPanel;