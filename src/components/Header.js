import React from 'react';
import icon from '../images/icon.png';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState,useEffect } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';

const Header= ({setQuery})=>{
    

    return(
        <div className="header">
            <img src={icon} alt="earthquake icon"/>
            <h2>Earthquake Tracker</h2>
            <Dropdown >
                <Dropdown.Toggle variant="success" id="dropdown-autoclose-true">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu onSelect={(e)=>{setQuery(e.value);console.log(e.value)}}>
                    <Dropdown.Item>2.5 or less</Dropdown.Item>
                    <Dropdown.Item>2.5 to 5.4</Dropdown.Item>
                    <Dropdown.Item>5.5 to 6.0</Dropdown.Item>
                    <Dropdown.Item>5.5 to 6.0</Dropdown.Item>
                    <Dropdown.Item>6.1 to 6.9</Dropdown.Item>
                    <Dropdown.Item>7.0 to 7.9</Dropdown.Item>
                    <Dropdown.Item>8.0 or greater</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        
        
    )
}

export default Header
