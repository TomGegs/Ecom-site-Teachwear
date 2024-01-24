import { Button } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../firebase/context/AuthContext';
import { useEffect, useState } from 'react';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { userSignInGoogle, userSignInEmail, user } = UserAuth();
    console.log(email, password);

    const navigateToAccount = useNavigate();

    // Email - sign in
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        try {
            await userSignInEmail(email, password);
            navigateToAccount('/account');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    };

    // Google  Sign-in
    const handleSignInGoogle = async () => {
        try {
            await userSignInGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    //Navigate to dashboard if signed in
    useEffect(() => {
        if (user != null) {
            navigateToAccount('/account');
        }
    }, [navigateToAccount, user]);

    return (
        <div className="absolute  left-[40%] top-0 mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center align-middle">
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                SIGN INTO YOUR ACCOUNT{' '}
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>
            {error ? (
                <div className="bg-[#e4c4c4] p-4 text-center text-xl font-semibold text-[#cb2b2b]">
                    Incorrect email or password.
                </div>
            ) : null}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="EMAIL"
                    onChange={(event) => setEmail(event.target.value)}
                    className="rounded-lg p-4 focus:border-orange-500 focus:ring-orange-500"
                />
                <input
                    type="password"
                    autoComplete="current-password"
                    id="password"
                    placeholder="PASSWORD"
                    onChange={(event) => setPassword(event.target.value)}
                    className="rounded-lg p-4 focus:border-orange-500 focus:ring-orange-500"
                />
                <Link to="/forgotPassword" className="underline">
                    FORGOT PASSWORD
                </Link>
                <Button
                    size="xl"
                    color="gray"
                    type="submit"
                    className="focus:border-orange-500 focus:ring-orange-500"
                >
                    SIGN IN
                </Button>
                <Link to="/register" className="underline">
                    CREATE ACCOUNT
                </Link>
            </form>

            {/* Social SignIn Buttons */}
            <div className="flex flex-col gap-4 text-center">
                <p className="uppercase before:mb-1  before:inline-block before:h-[2px] before:w-[50px] before:bg-gray-500 after:mb-1  after:inline-block after:h-[2px] after:w-[50px] after:bg-gray-500 ">
                    OR CONTINUE WITH
                </p>
                <Button
                    size="xl"
                    color="gray"
                    type="submit"
                    onClick={handleSignInGoogle}
                    className="focus:border-orange-500 focus:ring-orange-500"
                >
                    GOOGLE
                </Button>
            </div>
        </div>
    );
};
