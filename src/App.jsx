import './App.css'
// import { Wrapper } from './components/Wrapper/Wrapper'
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import { CityHeader } from './components/Home_Landing_Cards/City/CityHeader'
import {WeatherIcons} from './WeatherIcons/WeatherIcons'

function App() {

  return (
    <>
     <Logo /> 
     <FetchWeater/>
     <WeatherIcon />
    </>
  )
}

export default App
