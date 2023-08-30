import SunUpDownStyle from './SunUp_SunDown.module.scss'
import{TbSunrise, TbSunset} from 'react-icons/tb'

export function SunUp_SunDown(props) {

    return (
        <section className={SunUpDownStyle.sunUpDown}>
            <div className={SunUpDownStyle.sunUpDownIcons} >
                <TbSunrise alt="Solnedgang" />
                <TbSunset alt="Solopgang" />
            </div>
            <div>
                <h3 style={{ Textalign: 'center' }}> Solopgang  { props.solopgang && props.solopgang }  </h3>
                <h3 style={{ Textalign: 'center' }}> Solnedgang  { props.solnedgang && props.solnedgang } </h3>
            </div>
        </section>
    )
}
