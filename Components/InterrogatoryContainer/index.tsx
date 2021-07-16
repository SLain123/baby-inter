import { useState, useEffect } from 'react';
import interData from './interData';
import emailjs from 'emailjs-com';
import Interrogatory from '../Interrogatory';

export interface AnsrersListType {
    question: string;
    answer: string;
}

export interface CustomerInfoType {
    name: string;
    email: string;
}

export default function InterrogatoryContainer() {
    const [answerList, setAnswerList] = useState<AnsrersListType[] | null>(
        null,
    );
    const [radioOption, saveRadioOption] = useState<string | null>(null);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfoType>({
        name: '',
        email: '',
    });
    const [isStart, setStart] = useState(false);
    const [activeId, setActiveId] = useState<number | null>(null);
    const [isLast, setLast] = useState(false);

    const saveQuestionAndAnswer = (question: string) => {
        setAnswerList((current) => {
            const newAnswer = { question, answer: radioOption };
            return current !== null ? [...current, newAnswer] : [newAnswer];
        });
    };

    const saveCustomerInfo = (prop, value) => {
        const newData = { [prop]: value };
        setCustomerInfo((current) => ({ ...current, ...newData }));
    };

    useEffect(() => {
        if (isLast) {
            console.log(answerList, customerInfo);

            // emailjs
            //     .send(
            //         'service_q9newan',
            //         'template_u51wbbj',
            //         {
            //             answers: JSON.stringify(answerList.answers),
            //         },
            //         // 'user_YPN7p6zRQ4HdzMP37Gm3S',
            //     )
            //     .then(
            //         (result) => {
            //             console.log(result.text);
            //         },
            //         (error) => {
            //             console.log(error.text);
            //         },
            //     );
        }
    }, [isLast, answerList, customerInfo]);

    return (
        <Interrogatory
            interData={interData}
            isStart={isStart}
            activeId={activeId}
            setStart={setStart}
            setActiveId={setActiveId}
            saveQuestionAndAnswer={saveQuestionAndAnswer}
            saveRadioOption={saveRadioOption}
            radioOption={radioOption}
            saveCustomerInfo={saveCustomerInfo}
            setLast={setLast}
            customerInfo={customerInfo}
        />
    );
}
