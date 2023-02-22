import React from "react";
import { BuyNowButton, StickyTopSection, StickyTopText } from "./styled";
const StickyTop = () => {
  return (
    <StickyTopSection>
      <StickyTopText>
        envato<span>market</span>
      </StickyTopText>
      <BuyNowButton>Buy now</BuyNowButton>
    </StickyTopSection>
  );
};

export default StickyTop;
