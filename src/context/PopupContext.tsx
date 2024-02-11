import {createContext} from "react";

export type setOpen = (active: boolean) => void;

export const PopupContext = createContext<boolean>(false);
export const SetPopupOpenContext = createContext<setOpen>((): void => {});