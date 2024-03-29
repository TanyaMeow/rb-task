import closeLight from '../image/svg/button_close-light.svg';
import {Button} from "./Button";
import {useContext} from "react";
import {PopupContext, setOpen, SetPopupOpenContext} from "../context/PopupContext";

export function Popup() {
    const open: boolean = useContext(PopupContext);
    const setClosePopup: setOpen = useContext(SetPopupOpenContext);

    return (
        <div className='popup_block' style={{display: open ? 'flex' : 'none'}}>
            <div className='wrapper'>
                <div className='popup_container'>
                    <div onClick={() => setClosePopup(false)}
                         className='popup_close'>
                        <img src={closeLight} alt="Закрыть модальное окно записи" title="Закрыть модальное окно"/>
                    </div>
                    <div className='popup_body'>
                        <div className='popup_title'>
                            <div onClick={() => setClosePopup(false)}
                                 className='close'></div>
                            <h1 className='title'>Запишитесь <br/> на приём онлайн</h1>
                            <p className='description'>Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>
                        </div>
                        <div className='popup_form'>
                            <input className='form' type="text" placeholder='ФИО'/>
                            <input className='form' type="tel" placeholder='Номер телефона'/>
                            <input className='form' type="email" placeholder='Электронная почта'/>

                            <div className='button_container'>
                                <Button text='Записаться' class='green mobile'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
