import { useState, useEffect } from 'react';
import interData from './interData';
import emailjs from 'emailjs-com';
import Interrogatory from '../Interrogatory';

export default function InterrogatoryContainer() {
    const [answerList, setAnswerList] = useState({ email: '123', answers: [] });
    const [isStart, setStart] = useState(false);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isLast, setLast] = useState(false);

    const addAnswerToList = (
        question: string,
        answer: string,
        isLast: boolean,
    ) => {
        setAnswerList((list) => {
            const newAnswer = {
                question,
                answer,
            };
            return {
                email: list.email,
                answers: [...list.answers, newAnswer],
            };
        });

        isLast && setLast(true);
    };

    useEffect(() => {
        if (isLast) {
            emailjs
                .send(
                    'service_q9newan',
                    'template_u51wbbj',
                    {
                        email: answerList.email,
                        answers: JSON.stringify(answerList.answers),
                    },
                    // 'user_YPN7p6zRQ4HdzMP37Gm3S',
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    },
                );
        }
    }, [isLast, answerList]);

    return (
        <Interrogatory
            interData={interData}
            isStart={isStart}
            activeId={activeId}
            setStart={setStart}
            setActiveId={setActiveId}
            addAnswerToList={addAnswerToList}
        />
    );
}
