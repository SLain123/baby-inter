import styled from 'styled-components';
import Spinner from '../Spinner';

const MessageBlock = styled.div`
    width: 95%;
    max-width: 750px;
    display: flex;
    flex-flow: column;
    color: #393b3c;
    background: #ffffff;
    border-radius: 20px;
    border: 2px solid #2dc8e0;
    padding: 10px;

    @media (max-width: 767px) {
        max-width: 310px;
    }
`;

const MessageTitle = styled.p`
    text-align: center;
    font-size: 28px;
    font-weight: 700;
`;

const MessageBody = styled.p`
    text-align: center;
    font-size: 22px;
`;

interface FinishType {
    finishStatus: 'success' | 'fail' | 'load';
}

export default function FinishMessage({ finishStatus }: FinishType) {
    if (finishStatus === 'load') {
        return <Spinner />;
    }

    return finishStatus === 'success' ? (
        <MessageBlock>
            <MessageTitle>Анкета успешно отправлена!</MessageTitle>
            <MessageBody>
                Мы проанализируем ваши ответы в течение 24 часов и свяжемся с
                вами.
            </MessageBody>
        </MessageBlock>
    ) : (
        <MessageBlock>
            <MessageTitle>Что-то пошло не так...</MessageTitle>
            <MessageBody>
                Попробуйте обновить страницу и заполнить анкету еще раз. Если
                ошибка повториться, пожалуйста свяжитесь с нами обратившись на
                электронную почту test@test.ru
            </MessageBody>
        </MessageBlock>
    );
}
