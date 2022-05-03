import React from 'react';
import icon from '../images/icon.png';
import './Header.css';
import useState from 'react';

[time,setTime] = useState([]);
[magnitude,setMagnitude] = useState([]);

const Header= ({setQuery})=>{
    return(
        <div className="header">
            <img src={icon} alt="earthquake icon"/>
            <h2>Earthquake Tracker</h2>
        </div>
        
    )
}

export default Header
