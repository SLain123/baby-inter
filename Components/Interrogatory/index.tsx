import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import { InterDataType } from '../InterrogatoryContainer/interData';
import { CustomerInfoType } from '../InterrogatoryContainer';
import FinishMessage from '../FinishMessage';

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StartBtn = styled.button`
    min-width: 200px;
    min-height: 70px;
    font-size: 25px;
    background: #ffde00;
    color: #3c3d3d;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    opacity: 0.95;
    z-index: 2;

    :hover {
        opacity: 1;
    }
`;

interface Props {
    interData: InterDataType[];
    isStart: boolean;
    activeId: number | null;
    setStart: (status: boolean) => void;
    setActiveId: (id: number | null) => void;
    saveQuestionAndAnswer: (question: string) => void;
    saveRadioOption: (answer: string | null) => void;
    radioOption: null | string;
    saveCustomerInfo: (propName: string, value: string) => void;
    setLast: (isLast: boolean) => void;
    customerInfo: CustomerInfoType;
    finishStatus: null | 'success' | 'fail' | 'load';
}

export default function Interrogatory({
    interData,
    isStart,
    activeId,
    setStart,
    setActiveId,
    saveQuestionAndAnswer,
    saveRadioOption,
    radioOption,
    saveCustomerInfo,
    setLast,
    customerInfo,
    finishStatus,
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
                    Пройти тест!
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
                                saveQuestionAndAnswer={saveQuestionAndAnswer}
                                saveRadioOption={saveRadioOption}
                                radioOption={radioOption}
                                saveCustomerInfo={saveCustomerInfo}
                                setLast={setLast}
                                customerInfo={customerInfo}
                            />
                        )
                    );
                })}
            {finishStatus && <FinishMessage finishStatus={finishStatus} />}
        </Container>
    );
}
