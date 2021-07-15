import { useState } from 'react';
import styled from 'styled-components';

interface ListProps {
    type: string;
    answers: string[];
    question: string;
}

const AnswersBlock = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: ${(props) =>
        props.type === 'radio' ? 'flex-start' : 'center'};
`;
const AnswerWrapper = styled.div`
    margin: 25px 20px;
`;

const AnswerLabel = styled.label`
    display: flex;
    flex-direction: row;
    height: 28px;
    position: relative;
    align-items: center;
`;

const AnswerRadioHide = styled.input`
    position: absolute;
    opacity: 0;
    display: block;
    height: 0;
    width: 0;
`;

const AnswerRadioVisible = styled.span`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
    position: relative;
    height: 30px;
    width: 30px;
    border-radius: 30px;
    margin-right: 8px;
    background: ${(props) =>
        props.checked
            ? 'url("https://svgshare.com/i/ZAQ.svg") no-repeat center center'
            : 'url("https://svgshare.com/i/ZAA.svg") no-repeat center center'};
    cursor: ${(props) => (props.checked ? 'default' : 'pointer')};
    box-sizing: border-box;
    transition: 0.3s all;
    opacity: ${(props) => (props.checked ? '1' : '0.8')};
    outline: none;

    :hover {
        opacity: 1;
    }
`;

const AnswerTextForRadio = styled.span`
    cursor: ${(props) => (props.checked ? 'default' : 'pointer')};
    font-size: 16px;
    line-height: 1.4;
    margin-right: 10px;
    align-self: center;
    color: #3c3d3d;
    font-weight: 400;
`;

const AnswerInputForText = styled.input`
    font-size: 16px;
    color: #3c3d3d;
    line-height: 1.4;
    font-weight: 400;
    outline: none;
    padding: 7px 10px;
    border: 1px solid #7b7e7e;
    width: 80%;
    border-radius: 5px;
    margin-bottom: 20px;

    ::placeholder {
        color: #7b7e7e;
    }
`;

export default function AnswerList({ type, answers, question }: ListProps) {
    const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

    return (
        <AnswersBlock type={type}>
            {answers.map((answerText, index) => {
                const isChecked = checkedIndex === index;
                return type === 'radio' ? (
                    <AnswerWrapper key={answerText}>
                        <AnswerLabel htmlFor={index}>
                            <AnswerRadioHide
                                type='radio'
                                name={question}
                                id={index}
                                checked={isChecked}
                                onChange={() => setCheckedIndex(index)}
                            />
                            <AnswerRadioVisible checked={isChecked} />
                            <AnswerTextForRadio checked={isChecked}>
                                {answerText}
                            </AnswerTextForRadio>
                        </AnswerLabel>
                    </AnswerWrapper>
                ) : (
                    <AnswerInputForText
                        key={answerText}
                        placeholder={answerText}
                        type='text'
                    />
                );
            })}
        </AnswersBlock>
    );
}
