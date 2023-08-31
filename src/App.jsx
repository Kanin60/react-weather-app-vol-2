import './App.css'

// import { Wrapper } from './components/Wrapper/Wrapper'
import { Logo } from './components/Home_Landing_Cards/Logo/Logo'
import { FetchWeater } from './components/FetchWeather/FetchWeather'
import{FetchLocation} from './components/FetchLocation/FetchLocation'
import { BottomClouds } from './components/Bottom_Clouds/Clouds'
function App() {

  return (
    <>
      <Logo /> 
      <FetchLocation/>
      <FetchWeater />
      <BottomClouds/>
    </>
  )
}

export default App
