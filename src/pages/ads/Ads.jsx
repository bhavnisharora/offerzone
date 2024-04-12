import React from "react";
import Slider from "react-slick";
import ad from "../../assets/ads/ad1.webp";
import ad1 from "../../assets/ads/ad2.webp";
import ad2 from "../../assets/ads/ad3.webp";
import ad3 from "../../assets/ads/navratra.webp";
import "./Ads.css";
const Ads = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="slider-container mt-[100px]">
        {/* <Slider {...settings}>
          <div className="ads-banner object-cover h-full">
            <img src={ad} alt="" className="ads-banner" />
          </div>
          <div className="ads-banner">
            <img src={ad1} alt="" />
          </div>
          <div className="ads-banner">
            <img src={ad2} alt="" className="" />
          </div>
        </Slider> */}


        {/* <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite"
          onmousedown="this.stop();"
          onmouseup="this.start();">
          <img src={ad1} width="50%" height="100%" alt="ad" />
        </marquee> */}

        <div class="marquee-container">
          <img src={ad1} class="marquee-image" alt="ad" />
        </div>

        <div className="ads-banner mt-[100px]">
          <img src={ad3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Ads;
