'use client';

import { Dropdown, Navbar } from 'flowbite-react';
import bannerLogo from '../../../assets/images/beforeScrollNavLogo.svg';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../firebase/context/AuthContext';
import { useState } from 'react';
import Cart from '../../Cart/Cart';
import { useSelector } from 'react-redux';

const NavbarMain = () => {
    const { user } = UserAuth();
    const [open, setOpen] = useState(false);
    // const [close, setClose] = useState(true);

    const selectedProducts = useSelector((state) => state.cart.products);

    // Calculate the total quantity of items in the cart
    const totalQuantity = selectedProducts.reduce(
        (total: number, item: { quantity: number }) => total + item.quantity,
        0
    );

    return (
        <Navbar
            fluid
            rounded
            className="fixed left-0 top-0 z-20 w-full bg-white opacity-80 delay-75 duration-100 ease-in-out hover:border-b hover:border-gray-900 hover:bg-orange-300 dark:border-gray-600 dark:bg-gray-900 "
        >
            <Navbar.Collapse>
                <Navbar.Link href="/products">New In</Navbar.Link>
                <Navbar.Link>
                    <Dropdown inline label={'Mens'}>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Shirts</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Pants</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Other</Navbar.Link>
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

                <Navbar.Link>
                    <Dropdown inline label={'Womens'}>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Shirts</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Pants</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Other</Navbar.Link>
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

                <Navbar.Link>
                    <Dropdown inline label={'Accessories'}>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Belts</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Shoes</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Other</Navbar.Link>
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

                {/* <Navbar.Link>
                    <Dropdown inline label={'Collection'}>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Techwear</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Darkwear</Navbar.Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="block text-sm">
                            <Navbar.Link href="#">Other</Navbar.Link>
                        </Dropdown.Item>
                    </Dropdown>
                </Navbar.Link> */}
            </Navbar.Collapse>

            {/* Center Logo */}
            <Navbar.Brand href="/">
                <img
                    alt="Clothing store logo"
                    className="absolute left-1/2 h-6 -translate-x-1/2 transform sm:h-9"
                    src={bannerLogo}
                />
            </Navbar.Brand>

            {/* Right Navbar functions - Search, Profile & Cart */}
            <div className=" flex flex-row">
                {/* Search Function */}
                <div className="flex flex-row">
                    {/* <input
                        type="text"
                        id="search-navbar"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Search..."
                    /> */}
                </div>

                {/* Profile menu */}
                {/* <Navbar.Collapse>
                    <div className="flex">
                        <Dropdown
                            inline
                            label={
                                <Avatar
                                    alt="User settings"
                                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    rounded
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    User's Name
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    User's email address
                                </span>
                            </Dropdown.Header>

                            <Dropdown.Item>New In</Dropdown.Item>
                            <Dropdown.Item>Mens</Dropdown.Item>
                            <Dropdown.Item>Womens</Dropdown.Item>
                            <Dropdown.Item>Accessories</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </div>
                </Navbar.Collapse> */}
                {/* Shopping Cart */}
                <div className="flex flex-row">
                    <button
                        type="button"
                        className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-7"
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {' '}
                                <path
                                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                ></path>{' '}
                                <path
                                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                ></path>{' '}
                                <path
                                    d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{' '}
                            </g>
                        </svg>
                        <span>{totalQuantity}</span>
                        <span className="sr-only">Shopping cart</span>
                    </button>
                    {open && <Cart />}
                </div>

                {/* User Login */}
                <div className="ml-2 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 ">
                    <Link to={user?.emailVerified ? '/account' : '/login'}>
                        {user?.emailVerified ? (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-7"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M9 15C9.85038 15.6303 10.8846 16 12 16C13.1154 16 14.1496 15.6303 15 15"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    ></path>{' '}
                                    <ellipse
                                        cx="15"
                                        cy="9.5"
                                        rx="1"
                                        ry="1.5"
                                        fill="#000000"
                                    ></ellipse>{' '}
                                    <ellipse
                                        cx="9"
                                        cy="9.5"
                                        rx="1"
                                        ry="1.5"
                                        fill="#000000"
                                    ></ellipse>{' '}
                                    <path
                                        d="M22 12.3006C22 6.61173 17.5228 2 12 2C6.47715 2 2 6.61173 2 12.3006V19.723C2 21.0453 3.35098 21.9054 4.4992 21.314C5.42726 20.836 6.5328 20.9069 7.39614 21.4998C8.36736 22.1667 9.63264 22.1667 10.6039 21.4998L10.9565 21.2576C11.5884 20.8237 12.4116 20.8237 13.0435 21.2576L13.3961 21.4998C14.3674 22.1667 15.6326 22.1667 16.6039 21.4998C17.4672 20.9069 18.5727 20.836 19.5008 21.314C20.649 21.9054 22 21.0453 22 19.723V16.0118"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    ></path>{' '}
                                </g>
                            </svg>
                        ) : (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-7"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {' '}
                                    <path
                                        d="M16 10.5C16 11.3284 15.5523 12 15 12C14.4477 12 14 11.3284 14 10.5C14 9.67157 14.4477 9 15 9C15.5523 9 16 9.67157 16 10.5Z"
                                        fill="#000000"
                                    ></path>{' '}
                                    <ellipse
                                        cx="9"
                                        cy="10.5"
                                        rx="1"
                                        ry="1.5"
                                        fill="#000000"
                                    ></ellipse>{' '}
                                    <path
                                        d="M22 12.3006C22 6.61173 17.5228 2 12 2C6.47715 2 2 6.61173 2 12.3006V19.723C2 21.0453 3.35098 21.9054 4.4992 21.314C5.42726 20.836 6.5328 20.9069 7.39614 21.4998C8.36736 22.1667 9.63264 22.1667 10.6039 21.4998L10.9565 21.2576C11.5884 20.8237 12.4116 20.8237 13.0435 21.2576L13.3961 21.4998C14.3674 22.1667 15.6326 22.1667 16.6039 21.4998C17.4672 20.9069 18.5727 20.836 19.5008 21.314C20.649 21.9054 22 21.0453 22 19.723V16.0118"
                                        stroke="#000000"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    ></path>
                                </g>
                            </svg>
                        )}
                    </Link>
                </div>
            </div>
            <Navbar.Toggle />
        </Navbar>
    );
};
export default NavbarMain;
