import GoogleMapReact from 'google-map-react';

import Marker from './Marker';
import InfoBox from './InfoBox'

import {useState} from 'react';

const Map = ({eventData,center,zoom}) =>{
    const [information,setInfo] = useState(null);

    const markers = eventData.map(ev =>{
        if(ev.properties.type ==="earthquake"){
            return <Marker key={ev.id} lat ={ev.geometry.coordinates[1]} lng = {ev.geometry.coordinates[0]} onClick={()=>setInfo({id:ev.id,place:ev.properties.place,magnitude:ev.properties.mag,time:ev.properties.time})}/>
        }
        return null
    })
    return(
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key:'AIzaSyACO3iXlhDUPB28W_8TppEXnma6Md_yDaw'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {information && <InfoBox info={information}/>}
        </div>
    )
}
Map.defaultProps={
    center:{
        lat:42.3265,
        lng:-122.8756,
    },
    zoom:6
}

export default Map;