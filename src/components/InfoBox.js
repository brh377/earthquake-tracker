import React from 'react';

const InfoBox = ({info}) =>{
    let time = new Date(info.time).toUTCString()
    return(
        <div className="location-info">
            <h2>Earthquake Information</h2>
            <ul>
                <li>M {info.magnitude}</li>
                <li>{info.place}</li>
                <li>{time}</li>
            </ul>
        </div>
    )
}

export default InfoBox