import {Navigation} from "./Navigation";

import whatsapp from '../image/whatsapp 1.svg';
import instagram from '../image/instagram 4 1.svg';
import telegram from '../image/telegram 1.svg';
import logo from '../image/logo-light.svg';

export function Footer() {
    return (
        <footer className='footer'>
            <div className='wrapper'>
                <div className='footer_content'>
                    <img src={logo} alt=""/>
                    <div className='navigation_footer'>
                        <Navigation />
                    </div>
                    <div className='footer_social_bar'>
                        <a href=""><img className='icon inst' src={instagram} alt=""/></a>
                        <a href=""><img className='icon whats' src={whatsapp} alt=""/></a>
                        <a href=""><img className='icon teleg' src={telegram} alt=""/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}