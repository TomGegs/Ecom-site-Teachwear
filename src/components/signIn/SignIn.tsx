import { Button } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../firebase/context/AuthContext';
import { useEffect, useState } from 'react';

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const { userSignInGoogle, user } = UserAuth();
    console.log(email, password);

    // Email - sign in
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
    const navigateToAccount = useNavigate();

    useEffect(() => {
        if (user != null) {
            navigateToAccount('/account');
        }
    }, [navigateToAccount, user]);

    return (
        <div className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle">
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                Login{' '}
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="EMAIL"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="PASSWORD"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Link to="/forgotPassword" className="underline">
                    FORGOT PASSWORD
                </Link>
                <Button size="xl" color="gray" type="button">
                    SIGN IN{' '}
                </Button>
                <Link to="/register" className="underline">
                    CREATE ACCOUNT
                </Link>
            </form>

            {/* Social SignIn Buttons */}
            <div className="flex text-center">
                <p className="uppercase">OR SIGN IN WITH</p>
                <Button
                    size="xl"
                    color="gray"
                    type="submit"
                    onClick={handleSignInGoogle}
                >
                    GOOGLE
                </Button>

                <Button
                    size="xl"
                    color="gray"
                    type="submit"
                    onClick={handleSignInGoogle}
                >
                    FACEBOOK
                </Button>
            </div>
        </div>
    );
};
