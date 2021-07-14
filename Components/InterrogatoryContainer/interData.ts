export interface InterDataType {
    id: number;
    question: string;
    answers: string[];
    type: string;
}

const interData: InterDataType[] = [
    {
        id: 1,
        question: 'Это вопрос номер 1',
        answers: [
            'Это ответ номер 1',
            'Это ответ номер 2',
            'Это ответ номер 3',
            'Это ответ номер 4',
        ],
        type: 'radio',
    },
    {
        id: 2,
        question: 'Это вопрос номер 2',
        answers: [
            'Это ответ номер 1',
            'Это ответ номер 2',
            'Это ответ номер 3',
            'Это ответ номер 4',
        ],
        type: 'radio',
    },
    {
        id: 3,
        question: 'Это вопрос номер 3',
        answers: [
            'Это ответ номер 1',
            'Это ответ номер 2',
            'Это ответ номер 3',
            'Это ответ номер 4',
        ],
        type: 'radio',
    },
    {
        id: 4,
        question: 'Это вопрос номер 4',
        answers: ['Ваш email'],
        type: 'text',
    },
];

export default interData;
