import {Connection} from "./Connection";
import {Navigation} from "./Navigation";

export function Header() {
    return (
        <header className='header'>
            <div className='header_connection'>
                <div className='burger_menu'>
                    <div className='open_menu'></div>
                    <div className='close_menu'></div>
                </div>
                <Connection />
            </div>
            <div className='navigation'>
                <div className='wrapper'>
                    <Navigation/>
                </div>
            </div>
        </header>
    )
}