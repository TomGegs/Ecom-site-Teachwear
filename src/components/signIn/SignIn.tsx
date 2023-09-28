import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../firebase/context/AuthContext';

export function SignIn() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    const { userSignInGoogle } = UserAuth();
    // Google onClick Sign-in
    const handleSignInGoogle = async () => {
        try {
            await userSignInGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle">
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                Login{' '}
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="EMAIL"
                />
                <input
                    type="text"
                    name="password"
                    id="password"
                    placeholder="PASSWORD"
                />
                <Link to="/forgotPassword" className="underline">
                    FORGOT PASSWORD
                </Link>
                <Button size="xl" color="gray" type="button">
                    SIGN IN{' '}
                </Button>
                <Link to="/createAccount" className="underline">
                    CREATE ACCOUNT
                </Link>
            </form>
            {/* Social Signin Buttons */}
            <div className="flex text-center">
                <Button
                    size="xl"
                    color="gray"
                    type="submit"
                    onClick={handleSignInGoogle}
                >
                    SIGN IN WITH GOOGLE
                </Button>
            </div>
        </div>
    );
}
