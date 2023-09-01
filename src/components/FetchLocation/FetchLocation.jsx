import { getCurrentPosition } from "../../Helpers";
// import af hooks og library
import { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../FetchLocation/FetchLocation.module.scss'


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
                //console.log(position);

                // Hent breddegrad og længdegrad fra positionen
                const lat = position.coords.latitude;
                const long = position.coords.longitude;

                // Gem breddegrad og længdegrad i tilstand 
                setLatitude(lat);
                setLongitude(long)

                // Hent bynavnet baseret på breddegrad og længdegrad
                const fetchedCity = await fetchCity(lat, long);
                setCity(fetchedCity);
            }
            catch (error) {
                console.error('Error getting geolocation:', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchLocation();
    }, []);// Tomt array betyder, at useEffect kun køres ved montering


    async function fetchCity(latitude, longitude) {
        try {
            // Brug axios til at hente bynavnet fra BigDataCloud API med breddegrad og længdegrad
            const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`);
            return response;// Returnér API-svaret med bynavnet
        }
        catch (error) {
            console.error('Error fetching city:', error);
            return '';
        }
    }


return (
    <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <h1 className={style.Header}> {city.data.city}</h1>
        )}
    </>
);
        }
