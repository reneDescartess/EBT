import React, {useContext, useEffect,useState, Fragment } from 'react'
import './DashBoardPage.css';
import NavBar from '../components/NavBar';
import Wallet from '../components/Wallet';
import Summary from '../components/Summary';
const DashBoardPage=(props)=>{
    return(
        <div>
        
            <div class="dash-container columns">
                <div class="column is-one-third">
                    <div class="box">
                        <Wallet/>
                    </div>
                </div>
                
                <div class="column is-one-third ml-4  mr-2">
                    <div class="box">
                        <Summary/>
                    </div>

                </div>
              

            </div>
        </div>
    );
}

export default DashBoardPage;