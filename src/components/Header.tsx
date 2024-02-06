import {Connection} from "./Connection";
import {Navigation} from "./Navigation";
import {Popup} from "./Popup";

export function Header() {
    return (
        <header className='header'>
            <div className='header_connection'>
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