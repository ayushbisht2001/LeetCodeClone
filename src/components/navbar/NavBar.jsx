import React from "react";
import "../../styles/NavBar.css";
import { Span, Text, DFlex } from "../styledComponent/global.jsx";
import Logo from "../../assets/images/logo.png";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-left">
            <img src={ Logo} alt="LeetCode" width = "40px" height = "40px" style = {{margin : "0px 10px"}} />
            <Text  size = "25px" color = "white" height = "40px"
              family = "TypoRound"
              align  = "center"
              weight = "640"
            
            >
                <span>LeetCode </span>
        </Text>
        </div>
        
          <div className="navbar-right">
            <div className="nav-items-list">
              <a className="item">
                <span className = "item-text">Premium</span>
              </a>                        
              <a className = "item" >
                <span className = "item-text">
                    Explore
                </span>
              </a>        
              <a className = "item" >
                <span className = "item-text">
                  Product
                </span>
              </a>
              <a className = "item" >
                <span className = "item-text">
                  Developer
                </span>
              </a>
             <a className = "item last-item" >
                <span className = "item-text">
                  Sign in
                </span>
              </a>
          
          </div>

             
        </div>
      </div>
    </div>
  );
}
