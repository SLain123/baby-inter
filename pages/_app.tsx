import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps /*, AppContext */ } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Manrope', Arial, sans-serif;
    background: url("./bg.png");
    backdrop-filter: blur(3px);
    min-height: 100vh;
    min-width: 100%;
    height: 100%;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
