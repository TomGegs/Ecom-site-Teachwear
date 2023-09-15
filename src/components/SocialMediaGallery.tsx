import { SectionHeading } from './ui/headings/SectionHeading';

const SocialMediaGallery = () => {
    const galleryImages = [
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
            alt: '...',
        },
        {
            src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
            alt: '...',
        },
    ];

    return (
        <section className="relative mx-4 my-6 flex h-full flex-col items-center md:mx-40 md:my-16">
            <SectionHeading heading="See you in the wild" link="/" />

            <div className="grid grid-flow-dense auto-rows-min grid-cols-2 gap-4 md:grid-cols-4">
                {galleryImages.map((image, index) => (
                    <div
                        className={`group relative flex h-full flex-col`}
                        key={index}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="h-full max-w-full scale-100 rounded-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl"
                        />
                        <div className="absolute h-full w-full scale-100 rounded-xl opacity-0 transition-all duration-700 ease-in-out group-hover:block group-hover:scale-105 group-hover:bg-orange-700 group-hover:opacity-60">
                            <div className="relative flex h-full w-full transform flex-col items-center justify-end">
                                {/* Instagram icon */}
                                <svg
                                    className="h-8 w-8 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>

                                {/* Like icon and counter */}
                                <div className="mb-2 mr-2 flex h-[40%] w-full items-end justify-end ">
                                    <svg
                                        className="mr-2 h-6 w-6 text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18"
                                    >
                                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                    </svg>
                                    <span className="mr-2 text-white">###</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SocialMediaGallery;
