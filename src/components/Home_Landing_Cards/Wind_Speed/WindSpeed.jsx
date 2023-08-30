export function WindSpeed(props) {

    return (
        <section>
            <h3 style={{ Textalign: 'center' }}> Vind { props.vindhastighed && props.vindhastighed[0] } { props.km && props.km } { props.vindretning && props.vindretning[0] } { props.graderRetning && props.graderRetning }</h3>
        </section>
    )
}
