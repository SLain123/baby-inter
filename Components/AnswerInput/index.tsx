import React, { useState } from 'react';
import styled from 'styled-components';

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

interface InputProps {
    answerText: string;
    saveCustomerInfo: (propName: string, inputValue: string) => void;
    propName: string;
}

export default function AnswerInput({
    answerText,
    saveCustomerInfo,
    propName,
}: InputProps) {
    const [inputValue, setInputValue] = useState('');

    return (
        <AnswerInputForText
            onChange={(evt: React.ChangeEvent) => {
                const target = evt.target as HTMLTextAreaElement;
                setInputValue(target.value);
            }}
            value={inputValue}
            placeholder={answerText}
            onBlur={() => saveCustomerInfo(propName, inputValue)}
        />
    );
}
