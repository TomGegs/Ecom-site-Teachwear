interface SidebarProps {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export function Sidebar({ isSidebarOpen, toggleSidebar }: SidebarProps) {
    return (
        <>
            {/* {isSidebarOpen && ( */}
            <section
                className={`absolute z-10 flex h-full w-[70%] flex-col bg-red-400 transition-all duration-500 ease-in-out md:w-[50%] ${
                    isSidebarOpen
                        ? 'left-0 translate-x-0'
                        : '-left-full -translate-x-[100%]'
                }}`}
            >
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
                    </div>
                </div>
            </section>
            {/* )} */}
        </>
    );
}
