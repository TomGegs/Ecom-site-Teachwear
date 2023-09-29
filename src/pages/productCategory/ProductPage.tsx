import { useState } from 'react';
import { ProductCollection } from './productCollection/ProductsCollection';
import { Sidebar } from '../../components/ui/sidebar/Sidebar';

const ProductPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <section
            id="/products"
            className="relative flex h-full w-full flex-row"
        >
            {/* Sidebar */}
            <aside>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                />
            </aside>
            {/* Main Content */}
            <section className="relative h-full w-full flex-col">
                {/* Banner Image Container */}
                <div className="relative mx-auto h-[400px] w-full">
                    <img
                        src="https://ha3xun.com/cdn/shop/products/product-image-1623723964_600x.jpg?v=1612109676"
                        alt="..."
                        className="max-h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center">
                        <h1 className="relative w-full text-center text-5xl font-extrabold uppercase text-white dark:text-white">
                            <span className="text-orange-600 after:absolute after:bottom-0 after:right-10 after:h-[5px] after:w-[100px] after:translate-y-6 after:bg-orange-600 md:after:right-0">
                                Shop All
                            </span>{' '}
                        </h1>
                    </div>
                </div>
                {/* Product Grid */}
                <div className="relative flex w-full flex-col">
                    <button
                        className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-black text-black focus:outline-none focus:ring-4"
                        type="button"
                        onClick={toggleSidebar}
                        aria-controls="sidebar-example"
                        aria-expanded={isSidebarOpen}
                    >
                        Show Sidebar
                    </button>
                    <ProductCollection />
                </div>
            </section>
            <div
                className={`absolute top-0 w-full bg-black transition-all delay-100 duration-300 ease-in-out ${
                    isSidebarOpen
                        ? `h-full min-h-screen opacity-50`
                        : `h-0 opacity-0`
                }`}
            />
        </section>
    );
};

export default ProductPage;
