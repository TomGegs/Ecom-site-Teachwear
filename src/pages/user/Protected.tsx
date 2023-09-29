import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../../firebase/context/AuthContext';

const Protected = () => {
    const { user } = UserAuth();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default Protected;
