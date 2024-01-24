import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../../makeRequest';
import { loadStripe } from '@stripe/stripe-js';
import { Key, ReactNode } from 'react';

const Cart = () => {
    const products = useSelector(
        (state: {
            cart: {
                products: Array<{
                    id: Key | string | null | undefined;
                    img: string | undefined;
                    title: ReactNode;
                    desc: string;
                    price: number;
                    quantity: number;
                }>;
            };
        }) => state.cart.products
    );

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        (products as Array<{ price: number; quantity: number }>).forEach(
            (item: { price: number; quantity: number }) =>
                (total += item.price * item.quantity)
        );
        return total.toFixed(2);
    };

    const stripePromise = loadStripe(
        import.meta.env.VITE_STRIPE_PROMISE as string
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders', {
                products,
            });
            if (stripe) {
                await stripe.redirectToCheckout({
                    sessionId: res.data.stripeSession.id,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="cart">
            <div className="cartItems">
                <h1>Your Cart</h1>
                {products.map((item) => (
                    <div className="item" key={item.id}>
                        <img
                            src={
                                import.meta.env.REACT_APP_UPLOAD_URL + item.img
                            }
                            alt="cartImg"
                        />
                        <div className="details">
                            <div className="price" key={item.id + '-price'}>
                                <p>
                                    {item.quantity} x ${item.price}
                                </p>
                            </div>
                            <h1 key={item.id + '-title'}>{item.title}</h1>
                            <p key={item.id + '-desc'}>
                                {item.desc?.substring(0, 100)}
                            </p>
                            <span className="size" key={item.id + '-size'}>
                                SMALL
                            </span>
                        </div>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() =>
                                dispatch(removeItem(item.id as string))
                            }
                            key={item.id + '-delete'}
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {' '}
                                <path
                                    d="M22 12C22 15.7712 22 17.6569 20.7961 18.8284C19.5921 20 17.6544 20 13.779 20H11.142C8.91458 20 7.80085 20 6.87114 19.4986C5.94144 18.9971 5.35117 18.0781 4.17061 16.24L3.48981 15.18C2.4966 13.6336 2 12.8604 2 12C2 11.1396 2.4966 10.3664 3.48981 8.82001L4.17061 7.76001C5.35117 5.92191 5.94144 5.00286 6.87114 4.50143C7.80085 4 8.91458 4 11.142 4L13.779 4C17.6544 4 19.5921 4 20.7961 5.17157C21.4673 5.82475 21.7643 6.69989 21.8957 8"
                                    stroke="#f1043f"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{' '}
                                <path
                                    d="M15.5 9.50002L10.5 14.5M10.5 9.5L15.5 14.5"
                                    stroke="#f1043f"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                ></path>{' '}
                            </g>
                        </svg>
                    </div>
                ))}
            </div>
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <div className="cartButtons">
                <button className="checkout" onClick={handlePayment}>
                    CHECKOUT
                </button>
                <span className="reset" onClick={() => dispatch(resetCart())}>
                    Clear all
                </span>
            </div>
        </div>
    );
};

export default Cart;
