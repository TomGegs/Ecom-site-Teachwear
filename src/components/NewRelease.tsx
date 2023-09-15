import { ProductCard } from './ProductCard';
import { SectionHeading } from './ui/headings/SectionHeading';

import BannerImg1 from '../assets/images/BannerImg1.png';
import BannerImg2 from '../assets/images/BannerImg2.png';

const NewRelease = () => {
    return (
        <section className="mx-4 my-6 flex flex-col items-center md:mx-40 md:my-16">
            {/* Section Title */}
            <SectionHeading heading="LATEST DROP" link="/" />
            {/* Section Item Cards */}
            <div className="flex h-full w-full flex-row gap-10">
                <ProductCard
                    image1={BannerImg1}
                    image2={BannerImg2}
                    itemName="Item NAME here"
                    itemPrice={100.01}
                    productLink="/"
                    key={1}
                />
                <ProductCard
                    image1={BannerImg1}
                    image2={BannerImg2}
                    itemName="Item NAME here"
                    itemPrice={100.01}
                    productLink="/"
                    key={1}
                />
                <span className="hidden flex-row gap-10 md:flex">
                    <ProductCard
                        image1={BannerImg1}
                        image2={BannerImg2}
                        itemName="Item NAME here"
                        itemPrice={100.01}
                        productLink="/"
                        key={1}
                    />
                    <ProductCard
                        image1={BannerImg1}
                        image2={BannerImg2}
                        itemName="Item NAME here"
                        itemPrice={100.01}
                        productLink="/"
                        key={1}
                    />
                </span>
            </div>
        </section>
    );
};

export default NewRelease;
