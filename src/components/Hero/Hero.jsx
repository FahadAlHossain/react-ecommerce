import React from "react";
import img1 from "../../assets/hero/women.png";
import img2 from "../../assets/hero/shopping.png";
import img3 from "../../assets/hero/sale.png";

const ImageList = [
  {
    id: 1,
    img: img1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum inventore officia aliquid obcaecati libero sed impedit velit, vel dolorem amet.",
  },
  {
    id: 2,
    img: img2,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum inventore officia aliquid obcaecati libero sed impedit velit, vel dolorem amet.",
  },
  {
    id: 3,
    img: img3,
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum inventore officia aliquid obcaecati libero sed impedit velit, vel dolorem amet.",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        <div className="h-[700px] w-[700px] bg-orange-400/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-0">

        </div>
        <div className="container pb-8 sm:pb-0">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Select, Choose, Buy & Make your life easy</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, excepturi.</p>
                        <div>
                            <button className="bg-gradient-to-r from-orange-400 to-orange-300 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
                        </div>
                    </div>
                    <div className="order-1 sm:order-2">
                        <div className="relative z-10">
                            <img className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  ) 
};

export default Hero;
