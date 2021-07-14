import styled from 'styled-components';
import AnswerList from '../AnswerList';
import { InterDataType } from '../InterrogatoryContainer/interData';

interface CardProps extends InterDataType {
    setActiveId: (id: number | null) => void;
    isLast: boolean;
    addAnswerToList: (
        question: string,
        answer: string,
        isLast: boolean,
    ) => void;
}

const Container = styled.div`
    width: 400px;
    heigth: 200px;
    border: black 1px solid;
`;

const Question = styled.p`
    font-size: 18px;
`;

const NextBtn = styled.button`
    font-size: 18px;
`;

export default function QuestionCard({
    question,
    answers,
    id,
    setActiveId,
    isLast,
    addAnswerToList,
    type,
}: CardProps) {
    return (
        <Container>
            <Question>{question}</Question>
            <AnswerList type={type} answers={answers} />
            <NextBtn
                onClick={() => {
                    addAnswerToList(question, String(id), isLast);
                    isLast ? setActiveId(null) : setActiveId((id += 1));
                }}
            >
                Далее
            </NextBtn>
        </Container>
    );
}
