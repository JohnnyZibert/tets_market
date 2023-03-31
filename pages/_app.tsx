import '../styles/global.css';
import '../styles/variables/global.scss';
import { ReactElement } from 'react';

interface IProps {
    Component: ReactElement
    pageProps: {}
}

export default function MyApp({ Component, pageProps }: IProps) {
    return <Component {...pageProps} />;
}
