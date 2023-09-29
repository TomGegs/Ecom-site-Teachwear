//Packages
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//Layouts
import { MainLayout } from './components/layouts/MainLayout';

//Pages
import Home from './pages/home/Home';
import IndividualProductPage from './pages/productIndividual/IndividualProductPage';
import ProductPage from './pages/productCategory/ProductPage';
import NotFound from './pages/error/NotFound';

//Login Pages
import CreateAccount from './pages/login/CreateAccount';
import UserLogin from './pages/login/UserLogin';
import ForgotPassword from './pages/login/ForgotPassword';
import UserDashboard from './pages/user/UserDashboard';
import Protected from './pages/user/Protected';
import { AuthContextProvider } from './firebase/context/AuthContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthContextProvider />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Home />,
                        children: [
                            {
                                path: '/products',
                                element: <ProductPage />,
                                children: [
                                    {
                                        path: 'products/individualProduct',
                                        element: <IndividualProductPage />,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: '/login',
                        element: <UserLogin />,
                    },
                    {
                        path: '/register',
                        element: <CreateAccount />,
                    },
                    {
                        path: '/forgotPassword',
                        element: <ForgotPassword />,
                    },

                    {
                        element: <Protected />,
                        children: [
                            {
                                path: '/account',
                                element: <UserDashboard />,
                            },
                        ],
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
        ],
    },
]);

export function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
