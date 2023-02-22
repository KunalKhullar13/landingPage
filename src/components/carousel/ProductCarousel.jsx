import React from "react";
import { ProductCarouselSection, CarouselHeader, CarouselButtonStyled } from "./styled";
import ProductCard from "./ProductCard";
import { useRef } from "react";
const ProductCarousel = () => {
  const products = [
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/1.png",
      name: "Product 1",
      price: "$38.00",
      category: "face",
      rating: "4.9",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/2.png",
      name: "Product 2",
      price: "$32.00",
      category: "face",
      rating: "4.3",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/3.png",
      name: "Product 3",
      price: "$55.00",
      category: "face",
      rating: "5.0",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/4.png",
      name: "Product 4",
      price: "$61.00",
      category: "face",
      rating: "4.6",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/5.png",
      name: "Product 5",
      price: "$25.00",
      category: "face",
      rating: "3.9",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/6.png",
      name: "Product 6",
      price: "$44.00",
      category: "face",
      rating: "4.8",
    },
    {
      url: "https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/product/7.png",
      name: "Product 7",
      price: "$29.00",
      category: "face",
      rating: "4.7",
    },
  ];
  const productRef = useRef();
  const handleCarousel = (event) => {
    let containerDimensions = productRef.current.getBoundingClientRect();
    let mainContainer = event.target.parentNode;
    let containerWidth = containerDimensions.width;
    let windowWidth = window.innerWidth;
    let scrollDistance = windowWidth>500?containerWidth+130:containerWidth+2*0.04*windowWidth;
    console.log(scrollDistance,windowWidth)
    let action = event.target.getAttribute("action");
    if(action === "next")
    {
      mainContainer.scrollLeft += scrollDistance;
    }
    if(action === "prev")
    {
      mainContainer.scrollLeft -= scrollDistance;
    }
    return

  };
  return (
    <>
      <CarouselHeader>Beauty Products</CarouselHeader>
      
      <ProductCarouselSection onClick={handleCarousel}>
      <CarouselButtonStyled action="next" data-action="next">&rarr;</CarouselButtonStyled>
      <CarouselButtonStyled action="prev" data-action="prev">&larr;</CarouselButtonStyled>
      
        {products.map((item, index) => {
          return <ProductCard refer={productRef} {...item} key={index}></ProductCard>;
        })}
      </ProductCarouselSection>
    </>
  );
};

export default ProductCarousel;
