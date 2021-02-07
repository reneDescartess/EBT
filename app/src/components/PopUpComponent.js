import React, { useEffect, useState } from "react";
import "./PopUpComponent.css";

import { Checkbox } from "antd";
function PopUpComponent(props) {


  return (
    <div className="popup-box">
      <div className="custom-box">
       
        
      <span class="icon-text">
              <span class="icon">
                <i class="fas fa-check-circle has-text-success"></i>
              </span>
              <span class="has-text-weight-bold">Swap succeed!</span>
            </span>

        <div class="is-flex is-flex-direction-row is-justify-content-space-between mt-5">
          
          <a class="button" onClick={props.handleClose} >
            {" "}
            Close
          </a>
        </div>
      </div>
    </div>
  );
}

export default PopUpComponent;
