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
    padding-bottom: 70px;

    @media (max-height: 650px) {
        position: static;
        transform: translate(0, 0);
        margin: 15px auto;
        min-height: 95vh;
    }
`;

const Question = styled.p`
    font-family: 'Manrope', Arial, sans-serif;
    color: #3c3d3d;
    font-size: 25px;
    font-weight: 700;
    text-align: justify;
`;

const NextBtn = styled.button`
    position: absolute;
    bottom: 15px;
    font-size: 18px;
    background: ${(props) => (props.disabled ? '#9b9672' : '#ffde00')};
    color: #3c3d3d;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: ${(props) => (props.disabled ? 'disable' : 'pointer')};
    opacity: ${(props) => (props.disabled ? '1' : 1)};

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
    const checkCustomerInfo = () => {
        if (customerInfo.name !== '' && customerInfo.email !== '') {
            return true;
        }
        return false;
    };

    const isDisabled = type === 'radio' ? !radioOption : !checkCustomerInfo();

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
            if (checkCustomerInfo()) {
                isLast ? setActiveId(null) : setActiveId((id += 1));
                setLast(true);
            } else {
                console.log('not valid');
            }
        }
    };

    const getBtnText = (isDisabled, isLast) => {
        if (isDisabled) {
            return 'Уточните ответ';
        }
        if (isLast) {
            return 'Отправить анкету';
        }
        return 'Далее';
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
            <NextBtn
                onClick={() => saveAnswerAndDisplayNext()}
                disabled={isDisabled}
            >
                {getBtnText(isDisabled, isLast)}
            </NextBtn>
        </Container>
    );
}
