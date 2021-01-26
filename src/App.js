import {useState,useEffect} from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(()=>{
    const fetchEvents = async () =>{
      setLoading(true)
      let today = new Date();
      let end = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      let start = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1)+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      
      const res = await fetch(`${process.env.REACT_APP_USGS_KEY}${start}&endtime=${end}`)
      const features = await res.json()

      setEventData(features.features)
      setLoading(false)
      
      
    }
    fetchEvents()
  },[])

  return (
    <div>
      <Header/>
      {!loading && eventData ? <Map eventData={eventData}/> : <Loader/>}
    </div>
  );
}

export default App;
