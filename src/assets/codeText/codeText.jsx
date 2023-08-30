
import React from 'react';
import { useGeolocation } from 'react-geolocation/us'

export function GeolocationDisplay() {
  const { coords, error } = useGeolocation();

  if (error) {
    return <p>Error getting geolocation: {error.message}</p>;
  }

  return (
    <div>
      <h1>Location data</h1>
      {coords ? (
       <div>
       <p>Breddegrad: {coords.latitude}</p>
       <p>Længdegrad: {coords.longitude}</p>
     </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}


