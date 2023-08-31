// Import af style
import style from './LocationButton.module.scss'
// Import af icon (knappen)
import { BiCurrentLocation } from 'react-icons/bi'
// Iport af function til at hente nuværende location
import { getCurrentPosition } from "../../Helpers";

// Component som retunere en knap som henter brugers nuværende location
export function LocationButton() {
    
    // Retunere en knap med en onClick-event som kalder functionen getCurrentPosition.
    return(
        <button onClick={ () => getCurrentPosition() } className={style.locationButton}><BiCurrentLocation/></button>
    )
}