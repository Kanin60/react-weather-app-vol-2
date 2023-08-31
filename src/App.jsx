// import af styling
import './App.css'
// import af components
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import { LocationButton } from './components/LocationButton/LocationButton';
import { FetchLocation } from './components/FetchLocation/FetchLocation';

function App() {


  return (
    <>
      <Logo /> 
      <FetchLocation />
      <FetchWeater />
      <LocationButton />
    </>
  )
}

export default App
