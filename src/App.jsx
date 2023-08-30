import './App.css'
import { CityHeader } from './assets/Components/Home_Landing_Cards/City/CityHeader'
import { Rain } from './assets/Components/Home_Landing_Cards/Rain/Rain'
import { SunUp_SunDown } from './assets/Components/Home_Landing_Cards/SunUp_SunDown/SunUp_SunDown'
import { Temperature } from './assets/Components/Home_Landing_Cards/Temperature/Temperature'
import { WeatherIcon } from './assets/Components/Home_Landing_Cards/Weather_Icon/WeatherIcon'
import { WindSpeed } from './assets/Components/Home_Landing_Cards/Wind_Speed/WindSpeed'

function App() {

  return (
    <>
      <CityHeader/>
      <Temperature/>
      <WindSpeed/>
      <Rain/>
      <WeatherIcon/>
      <SunUp_SunDown/>
    </>
  )
}

export default App
