import { Button } from 'flowbite-react';

interface CardProps {
    cardImage: string;
    cardTitle: string;
    cardButtonLabel: string;
}

const ItemCategoryCard = (cardProps: CardProps) => {
    return (
        <div className="group relative h-full w-full overflow-clip">
            <img
                src={cardProps.cardImage}
                alt={cardProps.cardImage}
                className="mx-auto h-full scale-95 object-cover transition duration-500 ease-in-out group-hover:scale-100"
            />
            <div className="absolute bottom-1/3 left-1/2 mx-auto flex -translate-x-1/2 translate-y-1/3 transform flex-col items-center text-center">
                <span className="z-10 translate-y-5 text-center text-xl font-black uppercase text-orange-500 transition duration-500 ease-in-out group-hover:-translate-y-3 md:text-4xl">
                    {cardProps.cardTitle}
                </span>
                <Button
                    size="xl"
                    color="gray"
                    className="hidden w-fit uppercase duration-500 ease-in-out group-hover:opacity-100 md:block md:opacity-0"
                >
                    {cardProps.cardButtonLabel}
                </Button>
            </div>
        </div>
    );
};

export default ItemCategoryCard;
