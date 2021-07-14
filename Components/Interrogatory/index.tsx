import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import { InterDataType } from '../InterrogatoryContainer/interData';

interface Props {
    interData: InterDataType[];
    isStart: boolean;
    activeId: number | null;
    setStart: (status: boolean) => void;
    setActiveId: (id: number | null) => void;
    addAnswerToList: (
        question: string,
        answer: string,
        isLast: boolean,
    ) => void;
}

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
`;

const StartBtn = styled.button`
    width: 100px;
`;

export default function Interrogatory({
    interData,
    isStart,
    activeId,
    setStart,
    setActiveId,
    addAnswerToList,
}: Props) {
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
                    return (
                        activeId === data.id && (
                            <QuestionCard
                                {...data}
                                setActiveId={setActiveId}
                                key={data.id}
                                isLast={indx === interData.length - 1}
                                addAnswerToList={addAnswerToList}
                            />
                        )
                    );
                })}
        </Container>
    );
}
