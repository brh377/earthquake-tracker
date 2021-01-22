import {useState,useEffect} from 'react';
import Map from './components/Map';
import Loader from './components/Loader';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(()=>{
    const fetchEvents = async () =>{
      setLoading(true)
      let today = new Date();
      let end = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let start = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1);
      const res = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`)
      const features = await res.json()

      setEventData(features.features)
      setLoading(false)
      
      
    }
    fetchEvents()
  },[])

  return (
    <div>
      {!loading && eventData ? <Map eventData={eventData}/> : <Loader/>}
    </div>
  );
}

export default App;
