import expand from '../image/Кнопка _Развернуть_.svg';
const questions = [
    {
        title: 'Заголовок часто задаваемого вопроса',
        text: 'Blandit et et ac non interdum odio tristique diam vestibulum. Velit in quis consequat lacus fringilla amet elementum pharetra massa. Morbi euismod nulla cras adipiscing tristique aliquet purus adipiscing. '
    },
    {
        title: 'Заголовок часто задаваемого вопроса с двумя абзацами',
        text: 'Enim lectus pretium pellentesque dignissim nam massa justo dolor. Lectus pharetra molestie ac urna lorem. Nibh et vestibulum ullamcorper elit.'  +
            'Massa arcu volutpat blandit augue nibh nisl fames. Sodales pharetra nisi quis purus lacinia. Sapien cras posuere dolor tincidunt quis sed adipiscing.'
    },
    {
        title: 'Заголовок часто задаваемого вопроса',
        text: 'Nunc mi purus semper quam. Tincidunt magna neque rutrum sollicitudin dui hendrerit sed. Ipsum fusce volutpat eu pretium morbi dictum et bibendum. Purus tellus sit vel sed amet commodo volutpat sed et. Nibh aliquam ornare fermentum consequat ultrices arcu. '
    },
    {
        title: 'Заголовок часто задаваемого вопроса',
        text: 'Tellus pharetra lorem placerat tortor pharetra. Faucibus diam egestas commodo rhoncus vitae tristique. Adipiscing ultricies gravida nunc nisi at ipsum enim lobortis a. Est risus est commodo nibh. In leo nisi nunc elit luctus nisl praesent. Nibh placerat dui in adipiscing fringilla auctor purus id augue. Viverra libero sit commodo sit aliquet massa euismod. '
    }
];

export function Questions() {
    return (
        <div className='question_block'>
            <div className='wrapper'>
                <h1 className='question_block-title'>Часто задаваемые вопросы</h1>
                <div className='question_container'>
                    {questions.map((question, index: number) =>
                        <div className='question' key={index}>
                            <div>
                                <h1 className='question_title'>{question.title}</h1>
                                <p className='question_text'>{question.text}</p>
                            </div>

                            <img src={expand} alt=""/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}