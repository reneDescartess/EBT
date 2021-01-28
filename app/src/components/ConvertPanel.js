import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './ConvertPanel.css';
import {DownOutlined} from '@ant-design/icons';
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
                {/* <button className='token-selection'>
                    <p className='token-name'> {token} </p>
                </button> */}
                <div class="select-container">
                    <select>
                        <option value="1" class="option">1</option>
                        <option value="2" class="option">2</option>
                        <option value="3" class="option">3</option>
                        <option value="4" class="option">4</option>
                        <option value="5" class="option">5</option>
                    </select>
                    <div class="down-arrow"> 
                        <DownOutlined style={{fontSize:"15px",color:"black"}} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ConvertPanel;