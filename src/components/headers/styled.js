import styled from "styled-components";
export const StickyTopSection = styled.div`
  background-color: #262626;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;
  margin: 0;
  span {
    color: #7aa93c;
  }
`;
export const StickyTopText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;
export const BuyNowButton = styled.button`
  background-color: #7aa93c;
  color: white;
  border-radius: 5px;
  height: 2rem;
  width: 6rem;
  border: none;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
export const SocialImageContainer = styled.div`
  flex: 2;
  padding: 10px;
  width: 10%;
  flex-grow: 1;
  flex-basis: 0;
  img {
    background-color: white;
    width: 3%;
    padding-right: 10px;
  }
`;
export const DropdownSection = styled.ul`
  position: absolute;
  background-color: white;
  z-index:2;
  padding: 0;
  top: 132px;
  left: ${(props) => (props.section === "Home" ? "38%" : "50%")};
  transform: ${(props) =>
    props.section === "Shop" ? "translate(-38%)" : "translate(-50%)"};
  box-shadow: 0px 0.5px 10px #00000070;
  img {
    padding: 0.3rem;
    background: white;
    cursor: pointer;
  }

  display: none;
`;

export const DropdownMenu = styled.div`
  transition: display 400ms linear;
  flex-direction: column;
  background-color: #fff;
  width: 8rem;

  border: none;
  display: flex;
  padding: 1rem;
`;

export const DropdownLinks = styled.a`
  font-weight: 300 !important;
  margin: 5px 0px;
  font-size: 12px;
  line-height: 1 !important;
  text-transform: capitalize;
  text-decoration: none;
  color: black;
`;
export const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0px auto;
  span {
    font-weight: bold;
    font-size: 4rem;
  }
`;
export const NavLinks = styled.a`
  text-decoration: none;
  line-height: 6rem;
  color: black;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const MainNav = styled.nav`
  display: flex;
  list-style-type: none;
  margin: 0;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  padding: 0px 10px;
  cursor: pointer;
  &:hover {
    ${DropdownSection} {
      display: flex;
    }
  }
`;
export const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const HamburgerIcons = styled.div`
  height: 0.125em;
  width: 1.5625em;
  margin-bottom: 0.3125em;
  background-color: #000;
`;
export const DropdownArrow = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;

  margin-left: 7px;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;
