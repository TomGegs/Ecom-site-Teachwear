import { useState } from "react";

interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
    const [consoleChecked, setConsoleChecked] = useState(false);
    const [tabletChecked, setTabletChecked] = useState(false);
    const [fotoChecked, setFotoChecked] = useState(false);
    const [fashionChecked, setFashionChecked] = useState(false);
    const [booksChecked, setBooksChecked] = useState(false);

    return (
        <div className="m-5 flex justify-center">
            <button
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
                type="button"
                onClick={toggleSidebar}
                aria-controls="drawer-example"
                aria-expanded={isSidebarOpen}
            >
                Show drawer
            </button>

            {isSidebarOpen && (
                <div className="fixed left-0 top-0 z-40 h-screen w-full max-w-xs -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800">
                    <h5
                        id="drawer-label"
                        className="mb-4 inline-flex items-center text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
                    >
                        Apply filters
                    </h5>
                    <button
                        type="button"
                        onClick={() => toggleSidebar()}
                        aria-controls="drawer-example"
                        className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="flex flex-1 flex-col justify-between">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h6 className="text-base font-medium text-black dark:text-white">
                                    Categories
                                </h6>

                                <div className="flex items-center">
                                    <input
                                        id="console"
                                        type="checkbox"
                                        value=""
                                        checked
                                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Console
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="tablet"
                                        type="checkbox"
                                        value=""
                                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Tablets
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="foto"
                                        type="checkbox"
                                        value=""
                                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Foto
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="fashion"
                                        type="checkbox"
                                        value=""
                                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Fashion
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="books"
                                        type="checkbox"
                                        value=""
                                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                                    />

                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Books
                                    </label>
                                </div>

                                <a
                                    href="#"
                                    className="text-primary-600 dark:text-primary-500 flex items-center text-sm font-medium hover:underline"
                                >
                                    View all
                                </a>
                            </div>

                            <div className="space-y-2">
                                <h6 className="text-base font-medium text-black dark:text-white">
                                    Prices
                                </h6>
                                <div className="col-span-2 flex items-center justify-between space-x-3">
                                    <div className="w-full">
                                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            From
                                        </label>

                                        <input
                                            type="number"
                                            id="price-from"
                                            value="300"
                                            min="1"
                                            max="10000"
                                            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                            placeholder=""
                                            required
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                            To
                                        </label>

                                        <input
                                            type="number"
                                            id="max-experience-input"
                                            value="3500"
                                            min="1"
                                            max="10000"
                                            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h6 className="text-base font-medium text-black dark:text-white">
                                    Rating
                                </h6>
                            </div>
                        </div>

                        <div className="bottom-0 left-0 mt-6 flex w-full justify-center space-x-4 pb-4 md:absolute md:px-4">
                            <button
                                type="submit"
                                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                            >
                                Apply filters
                            </button>
                            <button
                                type="reset"
                                className="hover:text-primary-700 w-full rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                            >
                                Clear all
                            </button>
                        </div>
                    </div>{' '}
                </div>
            )}
        </div>
    );
}
