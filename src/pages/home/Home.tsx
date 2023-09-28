import HeroCarousel from '../../components/Carousel';
import NewRelease from '../../components/NewRelease';
import ShopCategory from '../../components/ShopCategory';
import SocialMediaGallery from '../../components/SocialMediaGallery';
// import Trending from '../components/Trending';

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <NewRelease />
            <ShopCategory />
            {/* <Trending /> */}
            <SocialMediaGallery />
        </>
    );
};

export default Home;
