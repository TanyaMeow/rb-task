import {Navigation} from "./Navigation";

import whatsapp from '../image/svg/whatsapp 1.svg';
import instagram from '../image/svg/instagram 4 1.svg';
import telegram from '../image/svg/telegram 1.svg';
import logo from '../image/svg/logo-light.svg';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <div className='footer_content'>
                    <img src={logo} alt="Логотип страницы" title="Логотип страницы"/>
                    <div className='navigation_footer'>
                        <Navigation />
                    </div>
                    <div className='footer_social_bar'>
                        <a href=""><img className='icon inst' src={instagram} alt="Ссылка на instagram" title="Instagram"/></a>
                        <a href=""><img className='icon whats' src={whatsapp} alt="Ссылка на whatsapp" title="Whatsapp"/></a>
                        <a href=""><img className='icon teleg' src={telegram} alt="Ссылка на telegram" title="Telegram"/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}