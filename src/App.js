import {useState,useEffect} from 'react';
import Map from './components/Map';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(()=>{
    const fetchEvents = async () =>{
      let today = new Date();
//       if query{
        
//       }
      setLoading(true)
      
      let end = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      let start = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()-1)+'T'+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
      
      const res = await fetch(`${process.env.REACT_APP_USGS_KEY}${start}&endtime=${end}`)
      const features = await res.json()

      setEventData(features.features)
      setLoading(false)
      
      
    }
    fetchEvents()
  },[query])

  return (
    <div>
      <Header query = {setQuery}/>
      {!loading && eventData ? <Map eventData={eventData}/> : <Loader/>}
    </div>
  );
}

export default App;
