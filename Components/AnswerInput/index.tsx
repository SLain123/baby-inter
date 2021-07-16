import React, { useState } from 'react';
import styled from 'styled-components';
import { checkName, checkEmail } from './validateFunc';

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

    const saveData = () => {
        saveCustomerInfo(propName, inputValue);
    };

    return (
        <AnswerInputForText
            onChange={(evt: React.ChangeEvent) => {
                const target = evt.target as HTMLTextAreaElement;
                setInputValue(target.value);
                saveCustomerInfo(propName, '');

                if (propName === 'name' && checkName(target.value)) {
                    saveData();
                }
                if (propName === 'email' && checkEmail(target.value)) {
                    saveData();
                }
            }}
            value={inputValue}
            placeholder={answerText}
        />
    );
}
