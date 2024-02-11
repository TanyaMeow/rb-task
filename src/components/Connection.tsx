import {Button} from "./Button";

import logo from '../image/svg/logo-dark.svg';
import location from '../image/svg/Vector.svg';
import whatsapp from '../image/svg/whatsapp 1.svg';

interface ConnectionProps {
    click: boolean,
    matches: boolean
}

export function Connection(props: ConnectionProps) {
    return (
        <div className='wrapper'>
            <div className='connection'>
                <div className='header_left'>
                    <img className="logo_header" src={logo} alt="Логотип страницы Clinic" title="Логотип страницы"/>
                    <div className="header_address">
                        <img className="map_icon" src={location} alt="Местонахождение клиники" title="Адрес клиники"/>
                        <p className="city">Ростов-на-Дону</p>
                        <p className="address">ул. Ленина, 2Б</p>
                    </div>
                </div>
                <div className='header_contact'>
                    <div className='contacts'>
                        <img className='whatsapp' src={whatsapp} alt="Ссылка на Whatsapp" title="Whatsapp"/>
                        <p className='number'>+7(863) 000 00 00</p>
                    </div>
                    {!props.matches &&
                        (<div style={{display: props.click ? 'block' : 'none'}}>
                            <Button text='Записаться на прием'
                                    class='header-button green'/>
                        </div>)}
                    {props.matches &&
                        (<div className='button_header-container'>
                            <Button text='Записаться на прием'
                                    class='header-button green'/>
                        </div>)}
                </div>
            </div>
        </div>
    )
}