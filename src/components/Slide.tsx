import {Button} from "./Button";
import doctor from "../image/doctor-working-table 1.jpg";

export function Slide() {
    return (
        <div className='slider_content'>
                <div className='path'></div>

                <div className='slider_title'>
                    <h1 className='title_slide'>Check-UP</h1>
                    <h2 className='subtitle_slide'>для мужчин</h2>
                    <div className='title_list'>
                        <ul>
                            <li>Гормональный скрининг</li>
                            <li>Тестостерон</li>
                            <li>Свободный тестостерон</li>
                            <li>Глобулин, связывающий половые гормоны</li>
                        </ul>
                    </div>
                    <div className='price'>
                        <p className='new_price'>Всего 2800₽</p>
                        <p className='old_price'><s>3500₽</s></p>
                    </div>
                    <div className='slider_button'>
                        <Button text='Записаться' class='green slide_button mobile'/>
                        <Button text='Подробнее' class='more mobile'/>
                    </div>
                </div>
            <img className='picture_slider' src={doctor} alt=""/>
            </div>

    )
}