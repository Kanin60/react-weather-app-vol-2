// import af styling
import './App.css'
// import af components
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import { LocationButton } from './components/LocationButton/LocationButton';
import { FetchLocation } from './components/FetchLocation/FetchLocation';
import { Pronose } from './components/Prognose/Prognose';
import { PrognoseIcon } from "./components/Prognose/PrognoseIcon";

function App() {


  return (
    <>
      <Logo /> 
      <FetchLocation />
      <FetchWeater />
      <LocationButton />
      <Pronose />
      <PrognoseIcon />
    </>
  )
}

export default App
