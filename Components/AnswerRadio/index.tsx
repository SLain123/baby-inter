import styled from 'styled-components';

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
    min-width: 30px;
    min-height: 30px;
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

interface InputRadioType {
    question: string;
    answerText: string;
    index: number;
    saveRadioOption: (answer: string) => void;
    isChecked: boolean;
    setCheckedIndex: (index: number) => void;
}

export default function InputRadio({
    question,
    answerText,
    index,
    saveRadioOption,
    isChecked,
    setCheckedIndex,
}: InputRadioType) {
    return (
        <AnswerLabel htmlFor={index}>
            <AnswerRadioHide
                type='radio'
                name={question}
                id={index}
                checked={isChecked}
                onChange={() => {
                    setCheckedIndex(index);
                    saveRadioOption(answerText);
                }}
            />
            <AnswerRadioVisible checked={isChecked} />
            <AnswerTextForRadio checked={isChecked}>
                {answerText}
            </AnswerTextForRadio>
        </AnswerLabel>
    );
}
