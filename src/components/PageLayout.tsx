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
            <div className="mt-[60px]">{children}</div>
            <FooterSiteMap />
        </>
    );
};

export default PageLayout;
