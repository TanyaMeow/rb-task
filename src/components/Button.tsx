import {useContext} from "react";
import {setOpen, SetPopupOpenContext} from "../context/PopupContext";

interface PropsButton {
    text: string,
    class: string
}

export function Button(props: PropsButton) {
    const setOpenPopup: setOpen = useContext(SetPopupOpenContext);

    return (
        <>
            <button onClick={() => setOpenPopup(true)}  className={'sign_up ' + props.class}>{props.text}</button>
        </>
    )
}