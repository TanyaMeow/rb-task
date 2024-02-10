import {createContext} from "react";

type setOpen = (active: boolean) => void;

export const PopupContext = createContext<boolean>(false);
export const SetPopupOpenContext = createContext<setOpen>(() => {})