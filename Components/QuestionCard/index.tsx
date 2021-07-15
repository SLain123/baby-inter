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
    width: 50%;
    min-width: 310px;
    box-sizing: border-box;
    padding: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 2px solid #2dc8e0;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 40%);
`;

const Question = styled.p`
    font-family: 'Manrope', Arial, sans-serif;
    color: #3c3d3d;
    font-size: 25px;
    font-weight: 700;
    text-align: justify;
`;

const NextBtn = styled.button`
    font-size: 18px;
    background: #ffde00;
    color: #3c3d3d;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    opacity: 0.95;

    :hover {
        opacity: 1;
    }
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
            <AnswerList type={type} answers={answers} question={question} />
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
