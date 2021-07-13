import { useState } from 'react';
import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import interData from './interData';

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
`;

const StartBtn = styled.button`
    width: 100px;
`;

export default function InterrogatoryContainer() {
    const [answerList, setAnswerList] = useState([]);
    const [isStart, setStart] = useState(false);
    const [activeId, setActiveId] = useState<number | null>(null);

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
                        />
                    ) : null;
                })}
        </Container>
    );
}
