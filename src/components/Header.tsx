'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import bannerLogo from '../assets/images/beforeSCrollNavLogo.svg';

const Header = () => {
    return (
        <Navbar
            fluid
            rounded
            className="fixed left-0 top-0 z-20 w-full bg-white opacity-80 delay-75 duration-100 ease-in-out hover:border-b hover:border-gray-900 hover:bg-orange-300 dark:border-gray-600 dark:bg-gray-900 md:px-20"
        >
            <Navbar.Collapse>
                <Navbar.Link href="products">New In</Navbar.Link>
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

                <Navbar.Link>
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
                </Navbar.Link>
            </Navbar.Collapse>

            {/* Center Logo */}
            <Navbar.Brand href="/">
                <img
                    alt="Clothing store logo"
                    className="mr-3 h-6 sm:h-9"
                    src={bannerLogo}
                />
            </Navbar.Brand>

            {/* Right Navbar functions - Search, Profile & Cart */}
            <div className=" flex flex-row justify-between">
                {/* Search Function */}
                <button
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="mr-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
                >
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                            className="h-4 w-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Search..."
                    />
                </div>

                {/* Profile menu */}
                <Navbar.Collapse>
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
                </Navbar.Collapse>
                {/* Shopping Cart */}
                <button
                    type="button"
                    className="ml-2 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 "
                >
                    <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="m13 7h5l-1.5 6h-11l-1.5-6h5"
                            fill="currentColor"
                        />
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m8.5 11.5v5m3-5v5m-7-8h13l-1.5 6h-10z"
                        />
                    </svg>
                    <span className="sr-only">Shopping cart</span>
                </button>
            </div>
            <Navbar.Toggle />
        </Navbar>
    );
};

export default Header;
