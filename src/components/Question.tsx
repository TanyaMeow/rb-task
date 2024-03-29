import expand from "../image/svg/Кнопка _Развернуть_.svg";
import turn from "../image/svg/Кнопка_Свернуть.svg";

// @ts-ignore
import purify from "dompurify";
import {useState} from "react";

interface QuestionProps {
    title: string,
    text: string
}

export function Question(props: QuestionProps) {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className='question'>
            <div>
                <h1 className='question_title'>{props.title}</h1>
                <p style={{display: active ? 'block' : 'none'}}
                   className='question_text'
                   dangerouslySetInnerHTML={{__html: purify.sanitize(props.text)}}></p>
            </div>

            <button onClick={() => setActive(true)}
                    style={{display: active ? 'none' : 'block'}}>
                <img src={expand}
                     alt="Раскрыть текст часто задаваемого вопроса"
                     title="Раскрыть ответ"/>
            </button>
            <button onClick={() => setActive(false)}
                    style={{display: active ? 'block' : 'none'}}>
                <img src={turn}
                     alt="Свернуть текст часто задаваемого вопроса"
                     title="Свернуть ответ"/>
            </button>
        </div>
    )
}