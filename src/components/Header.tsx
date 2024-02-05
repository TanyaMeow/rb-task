import {Connection} from "./Connection";
import {Navigation} from "./Navigation";

export function Header() {
    return (
        <div className='header'>
            <Connection/>
            <div className='navigation'>
                <div className='wrapper'>
                    <Navigation/>
                </div>
            </div>
        </div>
    )
}