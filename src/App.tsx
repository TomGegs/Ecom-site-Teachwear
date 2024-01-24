//Packages
import { Route, Routes } from 'react-router-dom';

//Layouts
import { MainLayout } from './components/layouts/MainLayout';

//Pages
import Home from './pages/home/Home';
import IndividualProductPage from './pages/productIndividual/IndividualProductPage';
import ProductPage from './pages/productCategory/ProductPage';
import NotFound from './pages/error/NotFound';

//Login Pages
import CreateAccount from './pages/login/CreateAccount';
import ForgotPassword from './pages/login/ForgotPassword';
import UserDashboard from './pages/user/UserDashboard';
import Protected from './pages/user/Protected';
import { SignIn } from './components/signIn/SignIn';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/products" element={<ProductPage />} />
                <Route
                    path="/products/individualProduct"
                    element={<IndividualProductPage />}
                />
                <Route path="/login" element={<SignIn />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route element={<Protected />}>
                    <Route path="/account" element={<UserDashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
