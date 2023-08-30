import './App.css'
// import { Wrapper } from './components/Wrapper/Wrapper'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import { CityHeader } from './components/Home_Landing_Cards/City/CityHeader'
import { Rain } from './components/Home_Landing_Cards/Rain/Rain'
import { SunUp_SunDown } from './components/Home_Landing_Cards/SunUp_SunDown/SunUp_SunDown'
import { Temperature } from './components/Home_Landing_Cards/Temperature/Temperature'
import { WeatherIcon } from './components/Home_Landing_Cards/Weather_Icon/WeatherIcon'
import { WindSpeed } from './components/Home_Landing_Cards/Wind_Speed/WindSpeed'
import {WeatherIcons} from './WeatherIcons/WeatherIcons'

function App() {

  return (
    <>
      <FetchWeater/>
      <CityHeader/>
      <Temperature/>
      <WindSpeed/>
      <Rain/>
      <WeatherIcon/>
      <SunUp_SunDown/>
      <WeatherIcons/>
    </>
  )
}

export default App
