import React from "react";
import {
  FourGridContainer,
  FourGridItem,
  FooterMenus,
  MenuHeader,
  FooterText,
} from "./styled";
const DetailsFooter = () => {
  return (
    <FourGridContainer>
      <FourGridItem>
        <FooterMenus>
          <MenuHeader>Contact Info</MenuHeader>
          <FooterText>
            <p>Address: </p>{" "}
            <span> 2168 S Archer Ave, Chicago, IL 60616, US </span>
          </FooterText>
          <FooterText>
            <p>Phone: </p> <span> +1312-808-1999</span>
          </FooterText>
          <FooterText>
            {" "}
            <p>Email: </p> <span> Beatycosmetics@gmail.com </span>
          </FooterText>
          <FooterText>
            {" "}
            <p>Opentime: </p> <span> 8.00am - 11.00.pm</span>
          </FooterText>
        </FooterMenus>
      </FourGridItem>
      <FourGridItem>
        <FooterMenus>
          <MenuHeader>Account</MenuHeader>
          <FooterText>
            <p>My account </p>
          </FooterText>
          <FooterText>
            <p>Wishlist</p>
          </FooterText>
          <FooterText>
            <p>Cart</p>
          </FooterText>
          <FooterText>
            <p>Shop</p>
          </FooterText>
          <FooterText>
            <p>Checkout</p>
          </FooterText>
        </FooterMenus>
      </FourGridItem>
      <FourGridItem>
        <FooterMenus>
          <MenuHeader>Information</MenuHeader>
          <FooterText>
            <p>About Us</p>
          </FooterText>
          <FooterText>
            <p>Careers</p>
          </FooterText>
          <FooterText>
            <p>Delivery Information</p>
          </FooterText>
          <FooterText>
            <p>Privacy Policy</p>
          </FooterText>
          <FooterText>
            <p>Terms & Conditions</p>
          </FooterText>
        </FooterMenus>
      </FourGridItem>
      <FourGridItem>
        <FooterMenus>
          <MenuHeader>Payment Methods</MenuHeader>
          <FooterText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit gravida
              facilisis.
            </p>
          </FooterText>
          <img src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/footer/payment.png" alt="" />
        </FooterMenus>
      </FourGridItem>
    </FourGridContainer>
  );
};

export default DetailsFooter;
