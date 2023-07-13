import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/TunTun/Navbar";
import Hero from "../../components/TunTun/Hero";
import Destinations from "../../components/TunTun/Destinations";
import Search from "../../components/TunTun/Search";
import Selects from "../../components/TunTun/Selects";
import Carousel from "../../components/TunTun/Carousel";
import Footer from "../../components/TunTun/Footer";
import Header from "../../components/TunTun/Header";
import Describe from "../../components/TunTun/Describe";
import Banner from "../../components/TunTun/Banner";
import Benefit from "../../components/TunTun/Benefit";
import Intro from "../../components/TunTun/Intro";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  return (
    <div>
      {/* <Describe/> */}
      <Helmet>
        <title>UIT.ai | Trang chủ</title>
      </Helmet>
      <Header />
      <img className="absolute w-80 z-20 top-2/4 left-1/2 transform -translate-x-1/2" src={"/images/demo1.png"} alt="demo1" />
      <Banner />
      <Benefit />
      <Intro />
      <Footer />
      {/* <Hero/> */}
      {/* <Destinations/>
            <Search/>
            <Selects/>
            <Carousel/>
            <Footer/>
            <Outlet/> */}
    </div>
  );
};
