import styled from 'styled-components';
import QuestionCard from '../QuestionCard';
import { InterDataType } from '../InterrogatoryContainer/interData';
import Image from 'next/image';
import first from '../../public/1.png';

interface Props {
    interData: InterDataType[];
    isStart: boolean;
    activeId: number | null;
    setStart: (status: boolean) => void;
    setActiveId: (id: number | null) => void;
    addAnswerToList: (
        question: string,
        answer: string,
        isLast: boolean,
    ) => void;
}

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
`;

const StartBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

    :hover {
        opacity: 1;
    }
`;

const FirstImageContainer = styled.div`
    width: calc(100% - 200px);
    display: flex;
    justify-content: center;
    padding-left: 200px;
`;

export default function Interrogatory({
    interData,
    isStart,
    activeId,
    setStart,
    setActiveId,
    addAnswerToList,
}: Props) {
    return (
        <Container>
            {!isStart && (
                <>
                    <FirstImageContainer>
                        <Image
                            src={first}
                            alt='Просто картинка-каррикатура'
                            width={450}
                            height={420}
                        />
                    </FirstImageContainer>
                    <StartBtn
                        onClick={() => {
                            setStart(true);
                            setActiveId(1);
                        }}
                    >
                        Пройти тест!
                    </StartBtn>
                    {/* <Image src={first} alt='Просто картинка-каррикатура' /> */}
                </>
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
                                addAnswerToList={addAnswerToList}
                            />
                        )
                    );
                })}
        </Container>
    );
}
