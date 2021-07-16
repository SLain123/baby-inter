export interface InterDataType {
    id: number;
    question: string;
    answers: string[];
    type: string;
    propsName?: string[];
}

const interData: InterDataType[] = [
    {
        id: 1,
        question:
            'Это вопрос номер 1:  text text text text text text texttexttexttext text',
        answers: [
            'Это ответ dfdfdggномер 1',
            'Это ответ ноdgfdgмер 2',
            'Это отgdfgdfgdfgвет номер 3',
            'Это отfgdfgвет номер 4',
        ],
        type: 'radio',
    },
    {
        id: 2,
        question: 'Это вопрос номер 2',
        answers: [
            'Это отdgdfgвет номер 1',
            'Это отвdfgdfgет номер 2',
            'Это ответ номер 3',
            'Это о твет номер 4',
        ],
        type: 'radio',
    },
    {
        id: 3,
        question: 'Это вопрос номер 3',
        answers: [
            'Это отвrtrtretetetete rete rt reg egergerg erg regegre ет номер 1',
            'Это  номер 2',
            'Это ответ номер 3',
            'Это ответ номер 4',
        ],
        type: 'radio',
    },
    {
        id: 4,
        question: 'Это вопрос номер 4',
        answers: ['Ваше имя', 'Ваш email'],
        type: 'contact',
        propsName: ['name', 'email'],
    },
];

export default interData;
