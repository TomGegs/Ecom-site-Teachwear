'use client';

import { Button, Carousel } from 'flowbite-react';

import BannerBackground from '../assets/images/BannerBackground.png';
import BannerImg1 from '../assets/images/BannerImg1.png';
import BannerImg2 from '../assets/images/BannerImg2.png';
import BannerImg3 from '../assets/images/BannerImg3.png';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
    const carouselImages = [
        {
            src: BannerImg1,
            alt: 'BannerImg1',
        },
        {
            src: BannerImg2,
            alt: 'BannerImg2',
        },
        {
            src: BannerImg3,
            alt: 'BannerImg3',
        },
    ];

    return (
        <section className="relative flex h-[90vh] w-full">
            <img
                src={BannerBackground}
                alt="BannerBackground"
                className="absolute left-0 top-0 h-full w-full object-cover"
            />
            <Carousel
                leftControl=" "
                rightControl=" "
                slideInterval={4000}
                pauseOnHover
            >
                {carouselImages.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="left-0 top-0 h-full w-full translate-x-0 translate-y-0 object-cover md:object-scale-down"
                    />
                ))}
            </Carousel>
            <div className=" absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center ">
                <h1 className="mb-6 text-5xl font-extrabold uppercase text-white dark:text-white">
                    TechWear for the{' '}
                    <span className="text-orange-600 underline">Modern</span>{' '}
                    Human
                </h1>
                <div className="flex flex-row gap-2">
                    <Button
                        size="xl"
                        color="gray"
                        type="button"
                        as={Link}
                        to="/products"
                    >
                        SHOP MENS
                    </Button>
                    <Button size="xl" color="gray">
                        SHOP WOMENS
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
