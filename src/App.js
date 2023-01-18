import axios from 'axios';
import { useEffect, useState } from 'react';
import City from './City';

function App() {

  const [search, setSearch] = useState("istanbul");
  const [city, setCity] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      const key = '7d78c82a12c8fca2c3762748f39530d1';
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${key}&units=metric`);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])

  return (
    <>
      <div className="weather-box">
        <div className="weather-search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text" placeholder="Find city"
            className="border-8 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring" />

        </div>
        {city.id && (
          <City city={city} />
        )

        }

      </div>
    </>
  );
}




export default App;
