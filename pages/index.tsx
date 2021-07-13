import Head from 'next/head';
import Footer from '../Components/Footer';
import InterrogatoryContainer from '../Components/InterrogatoryContainer';

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
            <InterrogatoryContainer />
            <Footer />
        </div>
    );
}
