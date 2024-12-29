import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
    const { currency, backendUrl, token } = useContext(ShopContext); // Updated context reference
    const [orderData, setOrderData] = useState([]);

    const loadOrderData = async () => {
        try {
            if (!token) {
                toast.error("You must be logged in to view your orders.");
                return;
            }

            const response = await axios.post(
                `${backendUrl}/api/order/userorder`,
                {},
                { headers: { token } }
            );

            if (response.data.orders) {
                const allOrdersItem = response.data.orders.flatMap((order) =>
                    order.items.map((item) => ({
                        ...item,
                        status: order.status,
                        payment: order.payment,
                        paymentMethod: order.paymentMethod,
                        date: order.date,
                    }))
                );

                setOrderData(allOrdersItem.reverse());
            } else {
                toast.error("No orders found.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to load orders. Please try again.");
        }
    };

    useEffect(() => {
        loadOrderData();
    }, []);

    return (
        <div className="border-t pt-16">
            <div className="text-2xl">
                <Title text1={"MY"} text2={"ORDERS"} />
            </div>
            <div>
                {orderData.length > 0 ? (
                    orderData.map((item, index) => (
                        <div
                            key={index}
                            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        >
                            <div className="flex items-start gap-6 text-sm">
                                <img src={item.image[0]} alt={item.name} className="w-16 sm:w-20" />
                                <div>
                                    <p className="sm:text-base font-medium">{item.name}</p>
                                    <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                                        <p>
                                            {currency}
                                            {item.price}
                                        </p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                    </div>
                                    <p className="mt-1">
                                        Date:{" "}
                                        <span className="text-gray-400">{new Date(item.date).toDateString()}</span>
                                    </p>
                                    <p className="mt-1">
                                        Payment Method:{" "}
                                        <span className="text-gray-400">{item.paymentMethod}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                                    <p>{item.status}</p>
                                </div>
                                <button
                                    onClick={loadOrderData}
                                    className="border px-4 py-2 text-sm font-medium rounded-sm"
                                >
                                    Reload Orders
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 mt-8">No orders available.</p>
                )}
            </div>
        </div>
    );
}

export default Orders;


/*import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
const Orders = () => {
    const { products, currency } = useContext(ShopContext);
    return (
        <div className='border-t pt-16'>
            <div className='text-2xl'>
                <Title text1={'MY'} text2={'ORDERS'} />
            </div>
            <div>
                {
                    products.slice(1, 4).map((item, index) => (
                        <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                                <div>
                                    <p className='sm:text-base font-medium'>{item.name}</p>
                                    <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                        <p className='text-lg'>{currency}{item.price}</p>
                                        <p>Quantity: 1</p>
                                        <p>Size: M</p>
                                    </div>
                                    <p className='mt-2'> Date: <span className='text-gray-400'>7, October, 2024</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base'>Ready to ship</p>
                                </div>
                                <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Orders*/
