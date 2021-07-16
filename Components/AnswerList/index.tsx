import React, { useState } from 'react';
import styled from 'styled-components';
import AnswerInput from '../AnswerInput';
import AnswerRadio from '../AnswerRadio';

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

interface ListProps {
    type: string;
    answers: string[];
    question: string;
    saveRadioOption: (answer: string) => void;
    saveCustomerInfo: (propName: string, value: string) => void;
    propsName: string[];
}

export default function AnswerList({
    type,
    answers,
    question,
    propsName,
    saveRadioOption,
    saveCustomerInfo,
}: ListProps) {
    const [checkedIndex, setCheckedIndex] = useState<number | null>(null);

    return (
        <AnswersBlock type={type}>
            {answers.map((answerText, index) => {
                const isChecked = checkedIndex === index;

                return type === 'radio' ? (
                    <AnswerWrapper key={answerText}>
                        <AnswerRadio
                            question={question}
                            answerText={answerText}
                            saveRadioOption={saveRadioOption}
                            index={index}
                            isChecked={isChecked}
                            setCheckedIndex={setCheckedIndex}
                        />
                    </AnswerWrapper>
                ) : (
                    <AnswerInput
                        key={answerText}
                        answerText={answerText}
                        saveCustomerInfo={saveCustomerInfo}
                        propName={propsName[index]}
                    />
                );
            })}
        </AnswersBlock>
    );
}
