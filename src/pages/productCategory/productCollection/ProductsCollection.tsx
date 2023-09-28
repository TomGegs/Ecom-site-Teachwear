// import useFetch from '../../hooks/useFetch';
import { ProductCard } from '../../../components/ProductCard';
import BannerImg1 from '../../../assets/images/BannerImg1.png';
import BannerImg2 from '../../../assets/images/BannerImg2.png';

//api props
// selectedSubCat, maxPrice, sort, catId;

//type ProductCollectionProps = {
//     image1: string;
//     image2: string;
//     itemName: string;
//     itemPrice: number;
//     key: number;
//     productLink: string;
// };

export function ProductCollection() {
    //{
    // image1,
    // image2,
    // itemName,
    // itemPrice,
    // key,
    // productLink,
    //   }: ProductCollectionProps
    // const { data, loading, error } = useFetch(
    //     `/products?populate=*&[filters][categories][id]=${catId}${selectedSubCat.map(
    //         (item) => `&[filters][sub_categories][id][$eq]=${item}`
    //     )}&[filters][price][$gte]=${maxPrice}&[sort]=price:${sort}`
    // );

    return (
        <div className="m-4 grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* {error
                ? 'Something went wrong!'
                : loading
                ? 'loading'
                : data?.map((item) => (
                      <ProductCard
                          image1={image1}
                          image2={image2}
                          itemName={itemName}
                          itemPrice={itemPrice}
                          key={key}
                          productLink={productLink}
                      />
                  ))} */}
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.09}
                productLink="individualProduct"
                key={1}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={2}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={3}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={4}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={5}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={6}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={7}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={8}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={9}
            />
            <ProductCard
                image1={BannerImg1}
                image2={BannerImg2}
                itemName="Item NAME here"
                itemPrice={100.01}
                productLink="/"
                key={10}
            />
        </div>
    );
}
