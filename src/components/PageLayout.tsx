import { ReactElement } from 'react';
import FooterSiteMap from './FooterSiteMap';
import Header from './Header';

interface Props {
    children: ReactElement;
}

const PageLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="mt-[60px] h-full min-h-screen ">{children}</main>
            <FooterSiteMap />
        </>
    );
};

export default PageLayout;
