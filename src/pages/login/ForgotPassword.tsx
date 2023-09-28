import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div
            className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle"
            id="forgotPassword"
        >
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                RESET YOUR PASSWORD
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>
            <h2>We will send you an email to reset your password</h2>
            <input type="text" placeholder="EMAIL" />
            <Button size="xl" color="gray" type="button">
                SUBMIT
            </Button>
            <Link to="/userLogin" className="underline">
                CANCEL
            </Link>
        </div>
    );
};

export default ForgotPassword;
