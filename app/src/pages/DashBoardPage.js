import React, {useContext, useEffect,useState, Fragment } from 'react'
import './DashBoardPage.css';
import NavBar from '../components/NavBar';
import Wallet from '../components/Wallet';
const DashBoardPage=(props)=>{
    return(
        <div>
            <NavBar/>
            <div class="dash-container">
                <div class="left-container">
                    <Wallet/>
                </div>
                <div class="right-container ">
                    <a class="button is-primary">
                            HI
                    </a>
                </div>

            </div>
        </div>
    );
}

export default DashBoardPage;