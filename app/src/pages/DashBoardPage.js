import React, {useContext, useEffect,useState, Fragment } from 'react'
import './DashBoardPage.css';
import NavBar from '../components/NavBar';
import Wallet from '../components/Wallet';
const DashBoardPage=(props)=>{
    return(
        <div>
        
            <div class="dash-container">
                <div class="box color-dark-blue-background">
                    <Wallet/>
                </div>
              

            </div>
        </div>
    );
}

export default DashBoardPage;