import Slider from "react-slick";
import { LuArrowBigRightDash, LuArrowBigLeftDash } from "react-icons/lu";
import image from "../../assets/brands/1.png";
import image2 from "../../assets/brands/2.png";
import image3 from "../../assets/brands/3.png";
import image4 from "../../assets/brands/4.png";
import image5 from "../../assets/brands/5.png";
import './Brand.css'
const FEATURE = [
  {
    URL: image,
  },
  {
    URL: image2,
  },

  {
    URL: image3,
  },
  {
    URL: image4,
  },
  {
    URL: image5,
  },

];

const Brand = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=" hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 right-0 bg-white lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5">
        <LuArrowBigRightDash className="" />
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div onClick={onClick} className="bg-white hover:bg-slate-200 cursor-pointer text-2xl p-3 inline-block rounded-lg shadow-2xl absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5">
        <LuArrowBigLeftDash />
      </div>
    )
  }

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };

  return (
    <div className="m">
          <h2 className=" heading-text font-bold text-black m-10 mt-20 text-2xl  text-center ">Listed Brands 😄</h2>
      <div className="w-[90%] m-auto">

        {/* <div className="pt-12">
          <Slider {...settings} >
            {FEATURE.map((feature) => (
              <div className=" overflow-hidden mx-4 group flex gap-10 relative rounded-2xl py-20 
              brand-card" key={feature.title} >
                <a href={"/"} className="overflow-hidden ">
                  <div className="shadow-2xl">
                    <img
                      src={feature.URL}
                      alt="img"
                      height={600}
                      width={510}
                      className="group-hover:rotate-3 hover:scale-105 transition-all duration-700 overflow-hidden object-contain"
                    />
                  </div>

                </a>
              </div>
            ))}
          </Slider>
        </div> */}


        <div className="container">
          <div className="group overflow-hidden text-center mb-10 max-w-[600px] mx-auto"></div>
          <Slider {...settings}>
            {FEATURE.map((data) => (
              <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl bg-black"
                >
                  <div className="mb-4 cursor-grab img-styling">
                    <figure>
                      <img
                        src={data.URL}
                        alt=""
                        className="w-full h-20 object-contain"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </div >
  );
};




export default Brand;


// import React from "react";
// import Slider from "react-slick";
// import image from "../../assets/brands/1.png";
// import image2 from "../../assets/brands/2.png";
// import image3 from "../../assets/brands/3.png";
// import image4 from "../../assets/brands/4.png";
// import image5 from "../../assets/brands/5.png";

// const TestimonialData = [
//   {
//     id: 1,
//     img: image,
//   },
//   {
//     id: 2,
//     img: image2,
//   },
//   {
//     id: 3,
//     img: image3,
//   },
//   {
//     id: 4,
//     img: image4,
//   },
//   {
//     id: 5,
//     img: image5,
//   },
// ];

// const Brand = () => {
//   var settings = {
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     pauseOnHover: true,
//     pauseOnFocus: true,
//     responsive: [
//       {
//         breakpoint: 10000,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <h2 className="mb-[-70px] heading-text font-bold text-black m-10 mt-20 text-2xl max-w-[400px] text-center">Listed Brands 😄</h2>
//       <div className="py-10 mb-10">
//         <div className="container">
//           <div className="text-center mb-10 max-w-[600px] mx-auto"></div>
//           <Slider {...settings}>
//             {TestimonialData.map((data) => (
//               <div data-aos="zoom-in" data-aos-delay="100" className="my-6">
//                 <div
//                   key={data.id}
//                   className="flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl bg-black"
//                 >
//                   <div className="mb-4">
//                     <img
//                       src={data.img}
//                       alt=""
//                       className="w-full h-20 object-contain"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Brand;
