import React from 'react';
import DemoPie from './Pie';


const Summary=(props)=>{

    return (
        <div>
            <h1>Account Summary</h1>
            <DemoPie/>
            <br/>
            <h1>Account Details</h1>

         
            <span class="icon-text">
              <span class="icon">
                <i class="fas fa-money-bill-wave"></i>
              </span>
              <span class="has-text-weight-bold">Account</span>
            </span>
          
          <div class="separator"></div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <span>EBT ($):</span>
            <span>300</span>
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <span>FRAX ($):</span>
            <span>100</span>
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <span>ETH ($):</span>
            <span>100</span>
          </div>
          <div class="is-flex is-justify-content-space-between mt-2">
            <span>Rate of Return: </span>
            <span>3.5%</span>
          </div>
          

        </div>

    );
}
export default Summary;