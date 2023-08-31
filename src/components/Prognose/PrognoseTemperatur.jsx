

export const PrognoseTemperatur = (props) => {

    
    return(
        <section style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            { 
            props.temperaturMin &&
            props.temperaturMin.map((item, index)=>{
                return(
                    <p key={index}>Her skal min temp være: {item} </p>
                )}
            )}
            { 
            props.temperaturMax &&
            props.temperaturMax.map((item, index)=>{
                return(
                    <p key={index}> max temp{item} </p>
                )}
            )}
        </section>
    )
}