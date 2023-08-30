import './App.css'

// import { Wrapper } from './components/Wrapper/Wrapper'
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import {WeatherIcons} from './components/WeatherIcons/WeatherIcons'
import{FetchLocation} from './components/FetchLocation/FetchLocation'

function App() {

  return (
    <>
      <Logo />
      <FetchWeater />
      <WeatherIcons/>
      <FetchLocation/>
    </>
  )
}

export default App
