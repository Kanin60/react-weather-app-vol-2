import WrapperStyle from './Wrapper.module.scss'

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
