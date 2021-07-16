import styled from 'styled-components';
import AnswerList from '../AnswerList';
import { InterDataType } from '../InterrogatoryContainer/interData';
import { CustomerInfoType } from '../InterrogatoryContainer';

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

interface CardProps extends InterDataType {
    setActiveId: (id: number | null) => void;
    isLast: boolean;
    saveQuestionAndAnswer: (question: string) => void;
    saveRadioOption: (answers: string | null) => void;
    radioOption: null | string;
    saveCustomerInfo: (propName: string, value: string) => void;
    setLast: (isLast: boolean) => void;
    customerInfo: CustomerInfoType;
}

export default function QuestionCard({
    question,
    answers,
    id,
    propsName,
    setActiveId,
    isLast,
    type,
    saveQuestionAndAnswer,
    saveRadioOption,
    radioOption,
    saveCustomerInfo,
    setLast,
    customerInfo,
}: CardProps) {
    const saveAnswerAndDisplayNext = () => {
        if (type === 'radio') {
            if (radioOption !== null) {
                saveQuestionAndAnswer(question);
                saveRadioOption(null);
                isLast ? setActiveId(null) : setActiveId((id += 1));
            } else {
                console.log('not valid');
            }
        } else if (type === 'contact') {
            if (customerInfo.name === '' || customerInfo.email === '') {
                console.log('not valid');
            } else {
                isLast ? setActiveId(null) : setActiveId((id += 1));
                setLast(true);
            }
        }
    };

    return (
        <Container>
            <Question>{question}</Question>
            <AnswerList
                type={type}
                answers={answers}
                question={question}
                saveRadioOption={saveRadioOption}
                propsName={propsName}
                saveCustomerInfo={saveCustomerInfo}
            />
            <NextBtn onClick={() => saveAnswerAndDisplayNext()}>
                {isLast ? 'Отправить анкету' : 'Далее'}
            </NextBtn>
        </Container>
    );
}
