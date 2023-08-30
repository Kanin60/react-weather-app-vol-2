
export function Rain(props) {

    return (
        <section>
            <h3 style={{ Textalign: 'center' }}> Nedbør { props.regn && props.regn[0] } { props.mm && props.mm } </h3>
        </section>
    )
}
