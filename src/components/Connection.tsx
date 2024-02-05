import {Button} from "./Button";

import logo from '../image/logo-dark.svg';
import location from '../image/Vector.svg';
import whatsapp from '../image/whatsapp 1.svg';

export function Connection() {
    return (
        <div className='wrapper'>
            <div className='connection'>
                <div className='header_left'>
                    <img className="logo_header" alt="" src={logo}/>
                    <div className="header_address">
                        <img className="map_icon" src={location} alt=""/>
                        <p className="city">Ростов-на-Дону</p>
                        <p className="address">ул. Ленина, 2Б</p>
                    </div>
                </div>
                <div className='header_contact'>
                    <div className='contacts'>
                        <img src={whatsapp} alt=""/>
                        <p className='number'>+7(863) 000 00 00</p>
                    </div>
                    <Button text='Записаться на прием'
                            class='green'/>
                </div>
            </div>
        </div>
    )
}