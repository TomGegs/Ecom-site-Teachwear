'use client';
import { Button, Table } from 'flowbite-react';
import { UserAuth } from '../../firebase/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UserDashboard = () => {
    const { logOut, user } = UserAuth();

    //sign out
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    const navigateToLogin = useNavigate();

    //Navigate to login if signed out
    useEffect(() => {
        if (user === null) {
            navigateToLogin('/login');
        }
    }, [navigateToLogin, user]);

    return (
        <section className="h-full w-full max-w-[1920px]">
            <div className="uppercase">
                <h1 className="text-3xl font-bold">Hi {user?.displayName}</h1>
                <Button onClick={handleSignOut}>Logout</Button>
            </div>
            <div className="mt-8 uppercase">
                <h2 className="text-2xl font-bold">Your Orders</h2>

                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>ORDER</Table.HeadCell>
                        <Table.HeadCell>DATE</Table.HeadCell>
                        <Table.HeadCell>FULFILLMENT STATUS</Table.HeadCell>
                        <Table.HeadCell>TOTAL</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <span className="underline hover:text-orange-500">
                                    #501
                                </span>
                            </Table.Cell>
                            <Table.Cell>September 21, 2023</Table.Cell>
                            <Table.Cell>FULFILLED</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <span className="underline hover:text-orange-500">
                                    #225
                                </span>
                            </Table.Cell>
                            <Table.Cell>AUGUST 03, 2023</Table.Cell>
                            <Table.Cell>FULFILLED</Table.Cell>
                            <Table.Cell>$1999</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </section>
    );
};

export default UserDashboard;
