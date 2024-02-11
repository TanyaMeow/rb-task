import questionsJSON from '../data/questions.json';
import {Question} from "./Question";

export function Questions() {
    return (
        <div className='question_block'>
            <div className='wrapper'>
                <h1 className='question_block-title'>Часто задаваемые вопросы</h1>
                <div className='question_container'>
                    {questionsJSON.questions.map((question, index: number) =>
                        <Question key={question.id}
                                  text={question.text}
                                  title={question.title}/>
                    )}
                </div>
            </div>
        </div>
    )
}