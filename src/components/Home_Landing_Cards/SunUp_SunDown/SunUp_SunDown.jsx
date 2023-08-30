import SunUpDownStyle from './SunUp_SunDown.module.scss'
import{TbSunrise, TbSunset} from 'react-icons/tb'

export function SunUp_SunDown(props) {
    console.log(props.solopgang);

    return (
        <section className={SunUpDownStyle.sunUpDown}>
            <div className={SunUpDownStyle.sunUpDownIcons} >
                <h3 style={{ Textalign: 'center' }}>  { props.solnedgang && props.solnedgang } </h3>
                <TbSunrise alt="Solnedgang" />
            </div>
            <div className={SunUpDownStyle.sunUpDownIcons}>
                <h3 style={{ Textalign: 'center' }}>  { props.solopgang && props.solopgang }  </h3>
                <TbSunset alt="Solopgang" />
            </div>
        </section>
    )
}
