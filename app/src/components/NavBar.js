import React , { useState } from 'react';
import 'antd/dist/antd.css';
import './NavBar.css';
//import Image from '../../assets/WTTW_logo.png';
function NavBar(){

//<img src={Image} class="logo"/>
    
    return(
        <aside class="menu sticky">
            <div class='ml-1 mt-1 is-flex is-flex-direction-column is-justify-content-space-between'>
                <h1 class='mt-3'>EBT</h1>
                <h1 class="mt-3">Decentralizing American Food Stamp System</h1>
            </div>
            
            <p class="menu-label">
                Account
            </p>
            <ul class="menu-list">
                <li><a href="./dash">Dashboard</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
            
            <p class="menu-label">
                Transactions
            </p>
            <ul class="menu-list">
                <li><a href="/">Swap</a></li>
                <li><a href="/example">Transfer</a></li>
            </ul>
        </aside>
        
        // <nav class="top-nav">

        //     <div class="title_container">
        //         <a href="./">EBT</a>
        //         <h2>Decentralizing American Food Stamp System</h2>
        //     </div>
        //     <div class="menu_container">
        //         <ul>
        //             <li><a href='/'>Swap</a></li>
        //             <li><a href='/dash'>Dashboard</a></li>
        //             <li><a href='/about'>About</a></li>
        //             <li><a href='/example'>smart contract</a></li>
        //         </ul>
        //     </div>
            
        // </nav>
    );

}


export default NavBar;