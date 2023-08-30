import SunUpDownStyle from './SunUp_SunDown.module.scss'
export function SunUp_SunDown(props) {
    console.log(props.solopgang);

    return (
        <section className={SunUpDownStyle.sunUpDown}>
            <div className={SunUpDownStyle.sunUpDownIcons} >
                <img src="" alt="Solnedgang" />
                <img src="" alt="Solopgang" />
            </div>
            <div>
                <h3 style={{ Textalign: 'center' }}> Solopgang  { props.solopgang && props.solopgang }  </h3>
                <h3 style={{ Textalign: 'center' }}> Solnedgang  { props.solnedgang && props.solnedgang } </h3>
            </div>
        </section>
    )
}
