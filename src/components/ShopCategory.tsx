import BannerImg1 from '../assets/images/BannerImg1.png';
import BannerImg2 from '../assets/images/BannerImg2.png';
import ItemCategoryCard from './ui/ItemCategoryCard';

const ShopCategory = () => {
    return (
        <section className="relative my-6 py-4 md:my-16">
            <div className="flex flex-wrap bg-gradient-to-tr from-gray-600 via-black to-gray-800 py-4">
                {/* First Column */}
                <div className="group relative w-full md:w-1/3">
                    <ItemCategoryCard
                        cardImage={BannerImg1}
                        cardTitle="NEW"
                        cardButtonLabel="EXPLORE"
                    />
                </div>
                {/* Second Column */}
                <div className="w-1/2 md:w-1/3">
                    <div className="flex flex-wrap ">
                        <ItemCategoryCard
                            cardImage={BannerImg2}
                            cardTitle="MENS TOPS"
                            cardButtonLabel="EXPLORE"
                        />
                        <ItemCategoryCard
                            cardImage={BannerImg1}
                            cardTitle="MENS BOTTOMS"
                            cardButtonLabel="EXPLORE"
                        />
                    </div>
                </div>
                {/* Third Column */}
                <div className="w-1/2 md:w-1/3">
                    <div className="flex flex-wrap">
                        <ItemCategoryCard
                            cardImage={BannerImg1}
                            cardTitle="WOMENS TOPS"
                            cardButtonLabel="EXPLORE"
                        />
                        <ItemCategoryCard
                            cardImage={BannerImg2}
                            cardTitle="WOMENS BOTTOMS"
                            cardButtonLabel="EXPLORE"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopCategory;
