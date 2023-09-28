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

const router = createBrowserRouter([
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
                path: '/createAccount',
                element: <CreateAccount />,
            },
            {
                path: '/forgotPassword',
                element: <ForgotPassword />,
            },
            {
                path: '/userLogin',
                element: <UserLogin />,
            },
            {
                path: '*',
                element: <NotFound />,
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
