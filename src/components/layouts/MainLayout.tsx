import { Outlet } from 'react-router-dom';
import FooterSiteMap from '../FooterSiteMap';
import NavbarMain from '../ui/navbar/NavbarMain';
import { AuthContextProvider } from '../../firebase/context/AuthContext';

export function MainLayout() {
    return (
        <AuthContextProvider>
            <NavbarMain />
            <main className="relative mt-[60px] h-full min-h-screen">
                <Outlet />
            </main>
            <FooterSiteMap />
        </AuthContextProvider>
    );
}
