import './App.css'
// import { Wrapper } from './components/Wrapper/Wrapper'
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import {WeatherIcons} from './WeatherIcons/WeatherIcons'

function App() {

  return (
    <>
     <Logo /> 
     <FetchWeater/>
     <WeatherIcons />
    </>
  )
}

export default App
