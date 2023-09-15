import HeroCarousel from '../components/Carousel';
import NewRelease from '../components/NewRelease';
import PageLayout from '../components/PageLayout';
import ShopCategory from '../components/ShopCategory';
import SocialMediaGallery from '../components/SocialMediaGallery';
// import Trending from '../components/Trending';

const Home = () => {
    return (
        <PageLayout>
            <>
                <HeroCarousel />
                <NewRelease />
                <ShopCategory />
                {/* <Trending /> */}
                <SocialMediaGallery />
            </>
        </PageLayout>
    );
};

export default Home;
