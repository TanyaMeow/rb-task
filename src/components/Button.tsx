import {useContext} from "react";
import {SetPopupOpenContext} from "../context/PopupContext";

interface PropsButton {
    text: string,
    class: string
}

export function Button(props: PropsButton) {
    const setOpenPopup = useContext(SetPopupOpenContext);

    return (
        <>
            <button onClick={() => setOpenPopup(true)}  className={'sign_up ' + props.class}>{props.text}</button>
        </>
    )
}