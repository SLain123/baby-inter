import { useState, useEffect } from 'react';
import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import interData from './interData';
import emailjs from 'emailjs-com';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
`;

const StartBtn = styled.button`
    width: 100px;
`;

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
                    'user_YPN7p6zRQ4HdzMP37Gm3S',
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
        <Container>
            {!isStart && (
                <StartBtn
                    onClick={() => {
                        setStart(true);
                        setActiveId(1);
                    }}
                >
                    Начать!
                </StartBtn>
            )}
            {isStart &&
                interData.map((data, indx) => {
                    return activeId === data.id ? (
                        <QuestionCard
                            {...data}
                            setActiveId={setActiveId}
                            key={data.id}
                            isLast={indx === interData.length - 1}
                            addAnswerToList={addAnswerToList}
                        />
                    ) : null;
                })}
        </Container>
    );
}
