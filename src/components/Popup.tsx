import closeLight from '../image/button_close-light.svg';
import {Button} from "./Button";

export function Popup() {
    return (
        <div className='popup_block'>
            <div className='wrapper'>
                <div className='popup_container'>
                    <div className='popup_close'>
                        <img src={closeLight} alt=""/>
                    </div>
                    <div className='popup_body'>
                        <div className='popup_title'>
                            <h1 className='title'>Запишитесь <br/> на приём онлайн</h1>
                            <p className='description'>Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>
                        </div>
                        <div className='popup_form'>
                            <input className='form' type="text" placeholder='ФИО'/>
                            <input className='form' type="text" placeholder='Номер телефона'/>
                            <input className='form' type="text" placeholder='Электронная почта'/>

                            <div className='button_container'>
                                <Button text='Записаться' class='green'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}