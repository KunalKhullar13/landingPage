import styled from "styled-components";
export const MainCarousel = styled.div`
  // background: url("https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/slider/SliderOne/1.png")
  // center center no-repeat;
  height: 80vh;
  max-width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-left: 12rem;
  align-items: baseline;
  flex-direction: column;
  @media (max-width: 800px) {
    padding-left: 2rem;
    height: 32vh;
  }
  div {
    z-index: 2;
  }
`;
export const CarouselImage = styled.img`
  position: absolute;
  left: 0;
  object-fit: cover;
  transition: all 0.5s linear;
  @media (max-width: 500px) {
    width: 100vw;
    height: 30vh;
  }
`;
export const MainCarouselText = styled.p`
  color: #fff;
  font-weight: 100;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const MainCarouselHeading = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 3rem;
  margin-top: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;
export const StyledButtons = styled.button`
  padding: 10px;
  height: 2.5rem;
  margin-top: ${(props) =>
    props.type === "info" ? "1rem" : props.type === "form" ? "2.5rem" : "0px"};
  width: 10rem;
  border: ${(props) => (props.type === "info" ? "1px solid #888" : " none")};
  color: ${(props) => (props.type === "info" ? "#888" : " #fff")};
  transition: background-color 300ms ease-in-out;
  letter-spacing: 1px;
  // font-weight: bold;
  background-color: ${(props) => (props.type === "info" ? "#fff" : " #f26460")};

  &: hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.type === "info" ? "#eee" : " #ef3f3a"};
  }
  @media (max-width:500px){
    width: ${(props) => (props.type === "newsletter" ? "3.5rem" : "10rem")}
`;
export const CarouselButtonStyled = styled.button`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.7);
  position: absolute;
  border: none;
  z-index: 2;
  left: ${(props) => (props.action === "prev" ? "0" : "")};
  right: ${(props) => (props.action === "next" ? "0" : "")};
  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const ProductCarouselSection = styled.div`
max-width: 90%;
margin:auto;
display:flex;
overflow-x: auto;
scroll-behavior: smooth;
&::-webkit-scrollbar{
  display:none;
}
margin-top: 1rem;
justify-content:flex-start;
padding: 10px;
@media (max-width:500px){
  max-width:100%;
}
`;
export const CarouselHeader = styled.h2`
font-weight: 500;
font-size:2.5rem;
text-align:center;
`
export const CardSection = styled.div`
margin:4%;
box-shadow: 1px 1px 10px #97979763;
transition: all 0.3s ease-in-out;
&:hover{
  cursor: pointer;  
  transform: translateY(-30px);
}
`;
export const ProductImage = styled.img`
width:250px;
@media (max-width:500px){
  width:315px;
}
`;

export const ProductDetailStrip = styled.div`
display: flex;
align-items: center;
padding: 0 10px;
justify-content: space-between;
margin-top:0;
color:#888
`;

export const ProductTitle = styled.h3`
margin-top:0;
padding-left:10px;
padding-top:0px;
font-weight:400;
font-size:1.1rem;
`;

export const ProductPrice = styled.h4`
margin-top:0;
padding-left:10px;
padding-top:0px;
font-weight:500;
font-size:1.1rem;
`;
