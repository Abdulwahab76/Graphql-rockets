import React from "react";
import "./../../App.css";
function Header() {
  return (
    <div>
      <nav class="">
        <div className='back-style'>
        <a class="navbar-brand" href="#">
          SPACE X
        </a>
        </div>
        
        <div
          class=""
          id="navbarNav"
          style={{
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          <ul class="flex ">
            <li class="nav-item active ">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li>
            
              <a class="nav-link" href="#Launches">
                Launches
              </a>
            </li>
            <li>
              
              <a class="nav-link" href="#Rockets">
                Rockets
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
