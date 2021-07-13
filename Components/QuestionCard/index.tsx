import styled from 'styled-components';

interface CardProps {
    question: string;
    answers: string[];
    id: number;
    setActiveId: (id: number | null) => void;
    isLast: boolean;
}

const Container = styled.div`
    width: 400px;
    heigth: 200px;
    border: black 1px solid;
`;

const Question = styled.p`
    font-size: 18px;
`;

const AnswerList = styled.select`
    list-style: none;
`;

const Answer = styled.option`
    font-size: 16px;
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
}: CardProps) {
    return (
        <Container>
            <Question>{question}</Question>
            <AnswerList>
                {answers.map((answerText) => (
                    <Answer key={answerText}>{answerText}</Answer>
                ))}
            </AnswerList>
            <NextBtn
                onClick={() => {
                    isLast ? setActiveId(null) : setActiveId((id += 1));
                }}
            >
                Далее
            </NextBtn>
        </Container>
    );
}
