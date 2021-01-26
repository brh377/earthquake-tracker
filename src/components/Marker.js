import marker from '../images/marker.png';
import './marker.css';
import { Icon } from '@iconify/react';
import earthquakeFill from '@iconify-icons/ri/earthquake-fill';



const Marker = ({onClick}) => {
    return(
        <div className ="marker" onClick={onClick}>
            <img src={marker} alt="background"/>
            <Icon icon={earthquakeFill} className="location-icon"/>
            
        </div>
    )
}
export default Marker