import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Greeting} from "./components/Greeting";
import {Questions} from "./components/Questions";
import {Slider} from "./components/Slider";
import {Footer} from "./components/Footer";
import {Popup} from "./components/Popup";
import {PopupContext, SetPopupOpenContext} from "./context/PopupContext";

function App() {
    const [openPopup, setOpenPopup] = useState(false);
    const open = (active: boolean) => {setOpenPopup(active)}

    return (
        <SetPopupOpenContext.Provider value={open}>
            <PopupContext.Provider value={openPopup}>
                <Popup/>
                <Header/>

                <div className='content'>
                    <PopupContext.Provider value={openPopup}>
                        <Greeting/>
                        <Questions/>
                        <Slider/>
                    </PopupContext.Provider>
                </div>

                <Footer/>
            </PopupContext.Provider>
        </SetPopupOpenContext.Provider>
    );
}

export default App;
