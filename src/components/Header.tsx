import {Connection} from "./Connection";
import {Navigation} from "./Navigation";
import {useEffect, useState} from "react";

export function Header() {
    const [clickMenu, setClickMenu] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 550px").matches);

    useEffect(() => {
        window.matchMedia(
            "(min-width: 540px)").addEventListener('change',
            (e) => setMatches(e.matches)
        );
    })

    return (
        <header className='header'>
            <div className='header_connection'>
                <div className='burger_menu'>
                    <div style={{display: clickMenu ? 'none' : 'block'}}
                         onClick={() => setClickMenu(true)}
                         className='open_menu'></div>
                    <div style={{display: clickMenu ? 'block' : 'none'}}
                         onClick={() => setClickMenu(false)}
                         className='close_menu'></div>
                </div>
                <Connection click={clickMenu}
                            matches={matches}/>
            </div>
            {!matches &&
                (<div style={{
                    width: clickMenu ? '100%' : '0%',
                    display: clickMenu ? 'flex' : 'none'
                }}
                      className='navigation'>
                    <div className='wrapper'>
                        <Navigation/>
                    </div>
                </div>)
            }
            {matches &&
                (<div className='navigation'>
                <div className='wrapper'>
                    <Navigation/>
                </div>
            </div>)
            }
        </header>
    )
}