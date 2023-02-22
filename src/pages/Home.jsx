import React from "react";
import StickyTop from "../components/headers/StickyTop";
import Navbar from "../components/headers/Navbar";
import CarouselMain from "../components/carousel/CarouselMain";
import InfoSection1 from "../components/grids/InfoSection1";
import InfoSection2 from "../components/grids/InfoSection2";
import Testimonials from "../components/grids/Testimonials";
import TeamInfo from "../components/grids/TeamInfo";
import BookService from "../components/forms/BookService";
import Newsletter from "../components/forms/Newsletter";
import DetailsFooter from "../components/footer/DetailsFooter";
import FooterStrip from "../components/footer/FooterStrip";
import ProductCarousel from "../components/carousel/ProductCarousel";
const Home = () => {

  return (
    <>
    <StickyTop></StickyTop>
        <Navbar />
        <CarouselMain />
    <InfoSection1 />
    <InfoSection2 />
    <ProductCarousel />
    <Testimonials />
    <TeamInfo />
    <BookService />
    <Newsletter />
    <DetailsFooter />
    <FooterStrip />
    </>
  );
};

export default Home;
