import { useContext, useEffect, useState } from 'react';
import bannerImage1 from '../../assets/images/BannerImg1.png';
import bannerImage2 from '../../assets/images/BannerImg2.png';
import bannerImage3 from '../../assets/images/BannerImg3.png';
import { Button, Select } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../firebase/context/AuthContext';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const IndividualProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(bannerImage1);
    const [imageChange, setImageChange] = useState(false);
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const { user } = useContext(AuthContext);

    const clothingID = doc(db, 'users', `${user?.email}`);

    const saveItems = async () => {
        if (user?.email) {
            setLiked(!liked);
            setSaved(true);
            await updateDoc(clothingID, {
                savedClothing: arrayUnion({
                    id: 101,
                    img: 'imgHere',
                    title: 'itemTitle',
                    desc: 'item.description',
                    price: '$332',
                }),
            });
        } else {
            alert('Please sign in to save items');
        }
    };

    // const { data, loading } = useFetch(`/products/${id}?populate=*`);

    function mainImageHandler(
        e: React.MouseEvent<HTMLImageElement, MouseEvent>
    ) {
        setSelectedImage(e.currentTarget.src);
    }

    useEffect(() => {
        setImageChange(true);
        setTimeout(() => {
            setImageChange(false);
        }, 300);
    }, [selectedImage]);

    const { id } = useParams<{ id: string }>();

    return (
        <div
            className="flex h-full flex-col gap-10 px-5 md:flex-row md:py-10"
            id={id}
        >
            {/* {loading ? (
                'loading'
            ) : ( */}
            <>
                {/* images on left */}
                <div className="flex h-full flex-row gap-2 place-self-center md:w-2/3">
                    {/* Alternative images */}
                    <div className="flex h-[80dvh] w-1/5 flex-shrink flex-col justify-center gap-2">
                        {/* mapping info into img opportunity */}
                        <img
                            // src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img.data.attributes.url}`}
                            // alt="mainImage"
                            // onClick={(e) => setSelectedImage('img')}
                            src={bannerImage1}
                            onClick={mainImageHandler}
                            className="h-full cursor-pointer rounded-xl bg-slate-400 object-cover"
                        />
                        <img
                            // src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2.data.attributes.url}`}
                            // alt="secondImage"
                            // onClick={(e) => setSelectedImage('img2')}
                            src={bannerImage2}
                            onClick={mainImageHandler}
                            className=" h-full cursor-pointer rounded-xl bg-slate-400 object-cover"
                        />
                        <img
                            // src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2.data.attributes.url}`}
                            // alt="secondImage"
                            // onClick={(e) => setSelectedImage('img2')}
                            src={bannerImage3}
                            onClick={mainImageHandler}
                            className="h-full cursor-pointer rounded-xl bg-slate-400 object-cover"
                        />
                    </div>
                    {/* Main image */}
                    <div className="flex-5 w-4/5">
                        <img
                            // src={`${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.[selectedImage]?.data?.attributes?.url}`}
                            src={selectedImage}
                            alt="largeMainImage"
                            className={`h-[80dvh] w-full cursor-pointer rounded-xl object-cover transition-all duration-500 ease-in-out ${
                                imageChange ? 'bg-slate-700' : 'bg-slate-400'
                            }`}
                        />
                    </div>
                </div>

                {/* product info on right */}
                <div className="flex h-full flex-col gap-5 md:w-1/3">
                    {/* <h1>{data?.attributes?.title}</h1> */}
                    <h1 className="text-2xl font-medium uppercase">
                        Clothing Title
                    </h1>
                    <span className="text-xl font-medium">
                        {/* ${data?.attributes?.price} */}
                        Clothing Price $100.09
                    </span>
                    <div className="max-w-md">
                        <Select id="size" required>
                            <option selected>SELECT YOUR SIZE</option>
                            <option value="XSmall">X-SMALL</option>
                            <option value="Small">SMALL</option>
                            <option value="Medium">MEDIUM</option>
                            <option value="Large">LARGE</option>
                            <option value="XLarge">X-LARGE</option>
                            <option value="2XLarge">2X-LARGE</option>
                        </Select>
                    </div>
                    {/* <p>{data?.attributes?.description}</p> */}
                    <p className="text-justify text-base font-thin">
                        Clothing Description
                    </p>
                    <div className="flex items-center gap-10">
                        <Button
                            color="gray"
                            onClick={() =>
                                setQuantity((prev) =>
                                    prev === 1 ? 1 : prev - 1
                                )
                            }
                        >
                            -
                        </Button>
                        {quantity}
                        <Button
                            color="gray"
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        className=""
                        // onClick={() =>
                        //     dispatch(
                        //         addToCart({
                        //             id: data?.id,
                        //             img: data?.attributes?.img.data
                        //                 .attributes.url,
                        //             title: data?.attributes?.title,
                        //             desc: data?.attributes?.desc,
                        //             price: data?.attributes?.price,
                        //             quantity: quantity,
                        //         })
                        //     )
                        // }
                    >
                        ADD TO CART ICON
                    </Button>
                    <div className="flex uppercase ">
                        <div className="flex items-center text-lg">
                            <Button color="gray" onClick={() => saveItems()}>
                                LIKE ICON
                            </Button>
                            <span className="ml-2">
                                {liked ? 'Liked' : 'Like'}
                            </span>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col gap-2 text-gray-500">
                        <span>Model wears size small.</span>
                        <span>Fabrication: Linen</span>
                        <span>
                            * Fabric is made with a repeat print and every piece
                            is slightly different and unique. No two pieces are
                            the same.
                        </span>
                        <hr />
                    </div>
                    <div className="mt-10 flex flex-col gap-2 text-gray-500">
                        <span>DESCRIPTION ACCORDION </span>
                        <hr />
                        <span>ADDITIONAL INFORMATION ACCORDION</span>
                        <hr />
                        <span>FAQ ACCORDION</span>
                    </div>
                </div>
            </>
            {/* )} */}
        </div>
    );
};

export default IndividualProductPage;
