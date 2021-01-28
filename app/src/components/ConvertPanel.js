import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './ConvertPanel.css';
import {DownOutlined} from '@ant-design/icons';
function ConvertPanel(props){
    function precise(x) {
        return Number.parseFloat(x).toPrecision(4);
      }
      
    

    return (
        <div>
            <div className='wrapper'>
                <div className='left'>
                    <p className='upper-text'>Balance: {props.input}</p>
                    {/* <p className='amount'>{amount}</p> */}
                    <input type="number" id="From" 
                           minlength="4" maxlength="8" size="10" defaultValue={props.input}
                           onChange={e=>props.setInput(e.target.value)}></input>
                   
                </div>
                <div className='right'>
                    <p className='upper-text'>From</p>
                
                    <div class="select-container">
                        <select onChange={(e)=>props.setFrom(e.target.value)}>
                            <option value="none" class="option">Select</option>
                            <option value="EBT" class="option">EBT</option>
                            <option value="FRAX" class="option">FRAX</option>
                            <option value="ETH" class="option">ETH</option>
                        </select>
                        <div class="down-arrow"> 
                            <DownOutlined style={{fontSize:"15px",color:"black"}} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='wrapper'>
            <div className='left'>
                <p className='upper-text'>Balance:{props.exchangeRate==0?"NA":precise(props.input/props.exchangeRate)} </p>
                <p className='amount'>{props.exchangeRate==0?"NA":precise(props.input/props.exchangeRate)}</p>
            </div>
            <div className='right'>
                    <p className='upper-text'>To</p>
                
                    <div class="select-container">
                        <select onChange={(e)=>props.setTo(e.target.value)}>
                            <option value="none" class="option">Select</option>
                            <option value="EBT" class="option">EBT</option>
                            <option value="FRAX" class="option">FRAX</option>
                            <option value="ETH" class="option">ETH</option>
                        </select>
                        <div class="down-arrow"> 
                            <DownOutlined style={{fontSize:"15px",color:"black"}} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
    )

}

export default ConvertPanel;