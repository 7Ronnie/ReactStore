// import PropTypes from 'prop-types'
import React, { useState } from 'react'

function Header() {

    const [btninfo, setBtnInfo] = useState("Login");
    
    return (
      <div className='headerComp'>
        <div className="logoComp">
            <h3>Logo.png</h3>
        </div>
        <div className="infoComp">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Help</li>
                    <li> 
                        <button className="btn-info" onClick={()=>(
                        
                           btninfo ==="Logout"?setBtnInfo("Login"):setBtnInfo("Logout")
                        )
                    }>{btninfo}</button>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    )
  
}

export default Header