import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Products2 from "../../components/Products/Products2";
import TopProducts from "../../components/Products/TopProducts";
import Banner from "../../components/Banner/Banner";
import Suscribe from "../../components/Banner/Suscribe";
import Testimonials from "../../components/Testimonials/Testimonials";
import Brand from "../../components/brand/Brand";
import Ads from "../ads/Ads";
import AdCarousel from "../../components/ads-carousel/AdCarousel";
import Promo from "../../components/promo/Promo";
import Subscription from "../../components/subscription/Subscription";
import Buffet from '../../components/buffet/Buffet'
const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>

      <Hero />
      <Brand />
      <AdCarousel />
      <Ads />
      <Promo />
      <Buffet />
      <Subscription />
      {/* <Products /> */}
      {/* <TopProducts /> */}
      <Banner />
      <Suscribe />
      {/* <Products2 /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
