import closeLight from '../image/button_close-light.svg';
import {Button} from "./Button";
import {useContext} from "react";
import {PopupContext} from "../context/PopupContext";

export function Popup(props: any) {
    const open: boolean = useContext(PopupContext);

    return (
        <div className='popup_block' style={{display: open ? 'flex' : 'none'}}>
            <div className='wrapper'>
                <div className='popup_container'>
                    <div className='popup_close'>
                        <img src={closeLight} alt=""/>
                    </div>
                    <div className='popup_body'>
                        <div className='popup_title'>
                            <div className='close'></div>
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
