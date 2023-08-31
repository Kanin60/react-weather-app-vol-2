import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Komponenten FetchLocation
export function FetchLocation() {

  // Tilstande til at gemme oplysninger i komponenten
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('');
    const [lat, setLatitude] = useState(null); 
    const [long, setLongitude] = useState(null)

  // useEffect køres, når komponenten vises
  useEffect(() => {
  // Funktion til at hente vores positionsdata
    async function fetchLocation() {
      try {
       // Hent vores position fra enheden
        const position = await getCurrentPosition();
        console.log(position);

        // Hent breddegrad og længdegrad fra positionen
        const lat =position.coords.latitude;
        const long= position.coords.longitude;
        // Gem breddegrad og længdegrad i tilstand
        
          setLatitude(lat); 
          setLongitude(long)

        // Hent bynavnet baseret på breddegrad og længdegrad
        const fetchedCity = await fetchCity(lat, long);
          setCity(fetchedCity);
        
      } catch (error) {
        console.error('Error getting geolocation:', error);
      } finally {
          setLoading(false);
      }
    }
    
    fetchLocation();

  }, []);// Tomt array betyder, at useEffect kun køres ved montering
      // console.log('hej',city);
  
  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  async function fetchCity(latitude, longitude) {
    try {

      // Brug axios til at hente bynavnet fra BigDataCloud API med breddegrad og længdegrad
      const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`);
      // const city = response.data.results[0].components.city;
      return response;// Returnér API-svaret med bynavnet
    } catch (error) {
      console.error('Error fetching city:', error);
      return '';
    }
  }

  return (
    <div>
      {/* <h1>Location</h1> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* <p>Latitude: {lat}</p>
          <p>Longitude: {long}</p> */}
          <h1> {city.data.city}</h1>
        </div>
      )}
    </div>
  );
}
