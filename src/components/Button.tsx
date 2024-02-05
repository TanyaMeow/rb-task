interface PropsButton {
    text: string,
    class: string
}

export function Button(props: PropsButton) {
    return (
        <>
            <button className={'sign_up ' + props.class}>{props.text}</button>
        </>
    )
}