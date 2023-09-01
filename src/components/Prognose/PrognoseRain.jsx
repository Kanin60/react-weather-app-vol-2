
export const PrognoseRain =(props)=>{

    return(
        <section style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
        {
            props.regnVejr &&
            props.regnVejr.map((item, index) => {
                return(
                    <p key={index}>{item} mm</p>
                )
            })
        }



        </section>
    )

}
