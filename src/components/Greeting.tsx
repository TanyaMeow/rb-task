import bkcn950w from '../image/bkcn-950w.jpg';
import bkcn375w from '../image/bkcn-375w.jpg';

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
            <picture>
                <source srcSet={bkcn375w} media='(max-width: 380px)'/>
                <img className='greet_image' src={bkcn950w} alt=""/>
            </picture>
        </div>
    )
}