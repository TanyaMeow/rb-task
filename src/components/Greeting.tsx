import bkcn from '../image/Rectangle 9.jpg';

export function Greeting() {
    return (
        <div className='greet_block'>
                <div className='wrapper'>
                    <div className='info_greeting'>
                        <div className='info_block'>
                            <h1 className='greet_title'>Многопрофильная клиника для детей и взрослых</h1>
                            <p className='greet_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
            </div>
            <img className='greet_image' src={bkcn} alt=""/>
        </div>
    )
}