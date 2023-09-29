'use client';

import { Link } from 'react-router-dom';

type ProductCardProps = {
    image1: string;
    image2: string;
    itemName: string;
    itemPrice: number;
    productLink: string;
};

export function ProductCard({
    image1,
    image2,
    itemName,
    itemPrice,
    productLink,
}: ProductCardProps) {
    return (
        <div className="h-full w-full py-6">
            <Link
                to={`/products/${productLink}`}
                className="group"
                preventScrollReset={true}
            >
                <div className="relative h-full w-full rounded-xl bg-gray-500">
                    <img
                        src={image1}
                        alt=""
                        className="flex h-full rounded-xl object-cover object-center transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <img
                        src={image2}
                        alt=""
                        className="absolute left-0 top-0 h-full rounded-xl bg-transparent object-cover object-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"
                    />
                </div>
            </Link>
            <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
                {itemName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                ${itemPrice}
            </p>
        </div>
    );
}
