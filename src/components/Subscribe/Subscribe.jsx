import React from 'react'
import Bg from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
  backgroundImage: `url(${Bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Subscribe = () => {
  return (
    <div data-aos="zoom-in" className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}>
      <div className='container backdrop-blur-sm py-10 mx-auto'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='tex2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
            <input type="text" placeholder='Enter Your Email' data-aos="fade-up" className='w-full p-3 bg-white text-gray-400'/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
