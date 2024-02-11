import questionsJSON from '../data/questions.json';
import {Question} from "./Question";

interface QuestionInterface {
    id: number,
    title: string,
    text: string
}

export function Questions() {
    return (
        <div className='question_block'>
            <div className='wrapper'>
                <h1 className='question_block-title'>Часто задаваемые вопросы</h1>
                <div className='question_container'>
                    {questionsJSON.questions.map((question: QuestionInterface) =>
                        <Question key={question.id}
                                  text={question.text}
                                  title={question.title}/>
                    )}
                </div>
            </div>
        </div>
    )
}