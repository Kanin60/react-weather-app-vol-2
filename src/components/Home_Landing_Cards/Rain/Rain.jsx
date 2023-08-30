
export function Rain(props) {

    console.log("Virker det?",props.regn);
    return (
        <section>
            <h3 style={{ Textalign: 'center' }}> Nedbør { props.regn && props.regn[0] } { props.mm && props.mm } </h3>
        </section>
    )
}
