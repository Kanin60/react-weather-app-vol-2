import WrapperStyle from '../Wrapper/Wrapper.mudule.scss'

export function Wrapper({ title, children }) {

    return (
        <section className={WrapperStyle.wrapper}>
            <h1>
                {title}
            </h1>
            {children}


        </section>

    )

}
