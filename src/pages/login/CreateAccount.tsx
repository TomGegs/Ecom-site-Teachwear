import { Button } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../firebase/context/AuthContext';
import { useEffect, useState } from 'react';

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { userSignInGoogle, user, createUserEmail } = UserAuth();

    const navigateToAccount = useNavigate();

    // Email - sign in
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        try {
            await createUserEmail(email, password);
            navigateToAccount('/account');
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
                console.log(error.message);
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

    console.log(lastName, error, firstName, email, password);
    //Navigate to dashboard if signed in

    useEffect(() => {
        if (user != null) {
            navigateToAccount('/account');
        }
    }, [navigateToAccount, user]);

    return (
        <div
            className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle"
            id="register"
        >
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                CREATE AN ACCOUNT WITH{' '}
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
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="FIRST NAME"
                    onChange={(event) => setFirstName(event.target.value)}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="LAST NAME"
                    onChange={(event) => setLastName(event.target.value)}
                />
                <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    onChange={(event) => setLastName(event.target.value)}
                />

                <Button size="xl" color="gray" type="button">
                    CREATE
                </Button>
            </form>

            <Link to="/login" className="underline">
                BACK TO LOGIN{' '}
            </Link>
            {/* Social SignIn Buttons */}
            <div className="flex text-center">
                <p className="uppercase">OR SIGN UP WITH</p>
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

export default CreateAccount;
