import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './NavBar.css';
//import Image from '../../assets/WTTW_logo.png';
function NavBar(){

//<img src={Image} class="logo"/>
    
    return(
        
        <nav class="top-nav">

            <div class="title_container">
                <a href="./">EBT</a>
                <h2>Decentralizing American Food Stamp System</h2>
            </div>
            <div class="menu_container">
                <ul>
                    <li><a href='/'>Swap</a></li>
                    <li><a href='/dash'>Dashboard</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/example'>smart contract</a></li>
                </ul>
            </div>
            
        </nav>
    );

}


export default NavBar;