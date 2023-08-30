import SunUpDownStyle from './SunUp_SunDown.module.scss'
export function SunUp_SunDown() {

    return (
        <section className={SunUpDownStyle.sunUpDown}>
            <div className={SunUpDownStyle.sunUpDownIcons} >
                <img src="" alt="Solnedgang" />
                <img src="" alt="Solopgang" />
            </div>
            <div>
                <h3 style={{ Textalign: 'center' }}> Solopgang  { } </h3>
                <h3 style={{ Textalign: 'center' }}> Solnedgang  { } </h3>
            </div>
        </section>
    )
}
