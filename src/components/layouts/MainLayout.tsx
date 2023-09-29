import { Outlet } from 'react-router-dom';
import FooterSiteMap from '../FooterSiteMap';
import NavbarMain from '../ui/navbar/NavbarMain';

export function MainLayout() {
    return (
        <>
            <NavbarMain />
            <main className="mt-[60px] h-full min-h-screen ">
                <Outlet />
            </main>
            <FooterSiteMap />
        </>
    );
}
