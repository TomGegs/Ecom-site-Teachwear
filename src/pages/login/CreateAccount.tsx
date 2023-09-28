import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    return (
        <div
            className="relative mx-auto flex h-full max-w-[600px] flex-col justify-center gap-6 object-center pt-12 align-middle"
            id="createAccount"
        >
            <h1 className="relative text-center text-3xl font-bold uppercase text-orange-600">
                MAKE AN ACCOUNT{' '}
                <span className="after:absolute after:bottom-0 after:left-1/2 after:h-[5px] after:w-[100px] after:-translate-x-12 after:translate-y-3 after:bg-orange-600" />
            </h1>

            <input type="text" placeholder="FIRST NAME" />
            <input type="text" placeholder="LAST NAME" />
            <input type="text" placeholder="EMAIL" />
            <input type="text" placeholder="PASSWORD" />
            <Button size="xl" color="gray" type="button">
                CREATE
            </Button>
            <Link to="/userLogin" className="underline">
                LOGIN{' '}
            </Link>
        </div>
    );
};

export default CreateAccount;
