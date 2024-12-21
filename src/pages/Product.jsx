import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);

    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const product = products.find((item) => item._id === productId);

        if (product) {
            setProductData(product);
            setImage(product.image?.[0] || assets.placeholder_image);
        } else {
            setProductData(null); // No matching product
        }
    }, [productId, products]);

    const handleAddToCart = () => {
        if (!size) {
            alert('Please select a size before adding to cart.');
            return;
        }
        addToCart(productData._id, size);
    };

    if (!productData) {
        return (
            <div className="flex justify-center items-center h-screen text-gray-500">
                <p>Loading product details or product not found...</p>
            </div>
        );
    }

    return (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Product Data */}
            <div className="flex gap-12 flex-col sm:flex-row">
                {/* Product Image Section */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-start sm:w-[18.7%] w-full">
                        {productData.image?.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                onClick={() => setImage(item)}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt={`Product thumbnail ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="Selected product view" />
                    </div>
                </div>

                {/* Product Info Section */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(4)].map((_, idx) => (
                            <img key={idx} src={assets.star_icon} alt="Star" className="w-3.5" />
                        ))}
                        <img src={assets.star_dull_icon} alt="Dull Star" className="w-3.5" />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}{productData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

                    {/* Size Selection */}
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes?.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className={`bg-black text-white px-8 py-3 text-sm ${!size ? 'opacity-50 cursor-not-allowed' : 'active:bg-gray-700'}`}
                        disabled={!size}
                    >
                        ADD TO CART
                    </button>

                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description and Review Section */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">Description</b>
                    <p className="border px-5 py-3 text-sm">Reviews (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>An e-commerce website is a digital platform that allows businesses and individuals to buy and sell products or services online...</p>
                    <p>It serves as an online store where customers can browse, select, and purchase products...</p>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    );
};

export default Product;
