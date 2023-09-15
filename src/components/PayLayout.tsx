import { ReactElement } from 'react';
import Subheader from './Subheader';
import Footer from './Footer';
import Header from './Header';

interface Props {
    children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <Subheader />
            {children}
            <Footer />
        </>
    );
};

export default RootLayout;
