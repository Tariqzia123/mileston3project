import React from 'react'
import ship1 from "../images/ship1.jpg"
import ship2 from "../images/ship2.webp"
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <section className="py-24 relative">
  <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
            <span className='text-blue-500 hover:text-red-700'>At Bazar Online</span>
            <br />
             shopping isn’t just about buying – it’s about connecting, inspiring, and enhancing your life. Welcome to a better way to shop. 
            </h3>
           
    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
          <Image
            className=" rounded-xl object-cover"
            src={ship1}            alt="about Us image"
          />
        </div>
        <Image
          className="sm:ml-0 ml-auto rounded-xl object-cover"
          src={ship2}
          alt="about Us image"
        />
      </div>
      <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
        <div className="w-full flex-col justify-center items-start gap-8 flex">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
            
At Bazar Online, we are committed to transforming the way you shop online. From handpicked collections of premium products to seamless customer service, every aspect of our store is designed with you in mind.  

Our journey began with a simple mission: to offer high-quality products at unbeatable prices, all while providing an effortless shopping experience. Today, we’re proud to serve a growing community of loyal customers who trust us for their everyday essentials and one-of-a-kind treasures.  

We believe in the power of choice, which is why we curate a diverse range of items to meet the needs of every shopper. Whether you’re looking for the latest trends or timeless classics, you’ll find it here.  


            </p>
          </div>
          
        </div>
        <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
          <span className="px-1.5 text-white text-sm font-medium leading-6">
            Read More
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
