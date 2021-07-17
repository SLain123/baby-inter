import Head from 'next/head';
import Footer from '../Components/Footer';
import InterrogatoryContainer from '../Components/InterrogatoryContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export default function Home() {
    return (
        <div>
            <Head>
                <title>Welcome on Baby Interrogatory</title>
                <meta
                    name='description'
                    content='Just interrogatory for parents'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Wrapper>
                <InterrogatoryContainer />
                <Footer />
            </Wrapper>
        </div>
    );
}
