import expand from "../image/Кнопка _Развернуть_.svg";
import turn from "../image/Кнопка_Свернуть.svg";

// @ts-ignore
import purify from "dompurify";
import {useState} from "react";

export function Question(props: any) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className='question' key={props.id}>
            <div>
                <h1 className='question_title'>{props.title}</h1>
                <p style={{display: active ? 'block' : 'none'}}
                   className='question_text'
                   dangerouslySetInnerHTML={{__html: purify.sanitize(props.text)}}></p>
            </div>

            <button onClick={() => setActive(true)}
                    style={{display: active ? 'none' : 'block'}}>
                <img src={expand}
                     alt=""/>
            </button>
            <button onClick={() => setActive(false)}
                    style={{display: active ? 'block' : 'none'}}>
                <img src={turn}
                     alt=""/>
            </button>
        </div>
    )
}