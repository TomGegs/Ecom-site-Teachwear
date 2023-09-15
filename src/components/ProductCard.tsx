'use client';

type ProductCardProps = {
    image1: string;
    image2: string;
    itemName: string;
    itemPrice: number;
    key: number;
    productLink: string;
};

export function ProductCard({
    image1,
    image2,
    itemName,
    itemPrice,
    key,
    productLink,
}: ProductCardProps) {
    return (
        <div>
            <a href={productLink} className="group" key={key}>
                <div className="relative h-[200px] w-full rounded-xl bg-gray-500 md:h-[500px]">
                    <img
                        src={image1}
                        alt=""
                        className="flex h-full rounded-xl object-cover object-center transition duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <img
                        src={image2}
                        alt=""
                        className="absolute left-0 right-0 top-0 h-full rounded-xl bg-transparent object-cover object-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100"
                    />
                </div>
            </a>
            <h5 className="text-xs font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
                {itemName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                ${itemPrice}
            </p>
        </div>
    );
}
