import logoStyle from './Logo.module.scss'

export function Logo() {

    return (
        <section className={logoStyle.logo}>
            <h1 style={{ Textalign: 'center' }}>AKM </h1>
            <h1 style={{ Textalign: 'center' }}>WEATHER</h1>

        </section>
    )
}
