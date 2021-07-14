import styled from 'styled-components';

interface ListProps {
    type: string;
    answers: string[];
}

const AnswerSelect = styled.select`
    list-style: none;
`;

const AnswerDiv = styled.div`
    width: 90%;
`;

const AnswerOption = styled.option`
    font-size: 16px;
`;

const AnswerInput = styled.input`
    font-size: 16px;
    ::placeholder {
        color: palevioletred;
    }
`;

export default function AnswerList({ type, answers }: ListProps) {
    return type === 'radio' ? (
        <AnswerSelect>
            {answers.map((answerText) => (
                <AnswerOption key={answerText}>{answerText}</AnswerOption>
            ))}
        </AnswerSelect>
    ) : (
        <AnswerDiv>
            {answers.map((answerText) => (
                <AnswerInput key={answerText} placeholder={answerText} />
            ))}
        </AnswerDiv>
    );
}
