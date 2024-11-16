import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>ShopPlusPlus is a dynamic e-commerce web application designed to offer an immersive and user-friendly online shopping experience. It allows users to browse products, manage accounts, create wishlists, and complete secure purchases. ShopPlusPlus provides essential features such as product filtering, cart management, order history, and tracking, as well as user reviews and ratings to help shoppers make informed decisions.</p>
                    <p> It provides users with the ability to browse products, add items to a cart, and securely complete transactions through integrated payment gateways. Key features of an e-commerce site include user account management, product browsing with filters, a wishlist, order history and tracking, user reviews and ratings, and secure purchase handling.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our Mission consectetur adipisicing elit. Accusantium dolore voluptas doloribus quo atque, reiciendis cum provident dolorum quisquam nobis veritatis. Unde ratione, placeat ea eum labore distinctio alias illo!</p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>consectetur adipisicing elit. Inventore harum ratione, illo temporibus facilis at rem quos magni rerum dolor, totam distinctioet, voluptate maxime quo soluta! Ut, numquam quia!</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>They serve as a valuable resource for both customers and businesses, enabling better decision-making, trust-building, and continuous improvement. A well-maintained review system can significantly.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>consectetur adipisicing elit. Inventore harum ratione, illo temporibus facilis at rem quos magni rerum dolor, totam distinctioet, voluptate maxime quo soluta! Ut, numquam quia!</p>
                </div>
            </div>

            <NewsletterBox />

        </div>
    )
}

export default About
