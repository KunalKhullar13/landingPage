// import Menu from './Menu'
import { DropdownArrow, MainNav, NavbarSection, NavLinks } from "./styled";
import { DropdownMenu, DropdownSection, ListItem,HamburgerMenu,HamburgerIcons,DropdownLinks } from "./styled";
const Navbar = () => {
  return (
    <>
      <NavbarSection>
        <span>Eliah</span>
        <MainNav>
          <ListItem>
            <NavLinks href="g">Home <DropdownArrow /></NavLinks>
            <DropdownSection section="Home">
              <DropdownMenu>
                <DropdownLinks  href="g">Beauty salon</DropdownLinks >
                <DropdownLinks  href="g">makeup salon</DropdownLinks >
                <DropdownLinks  href="g">mask shop</DropdownLinks >
                <DropdownLinks  href="g">spa shop</DropdownLinks >
                <DropdownLinks  href="g">natural shop</DropdownLinks >
              </DropdownMenu>
            </DropdownSection>
          </ListItem>

          <ListItem>
            <NavLinks href="g">Services</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks href="g">About</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks href="g">Shop <DropdownArrow /></NavLinks>
            <DropdownSection section="Shop">
              <DropdownMenu>
                <DropdownLinks  href="g">Beauty salon</DropdownLinks >
                <DropdownLinks  href="g">makeup salon</DropdownLinks >
                <DropdownLinks  href="g">mask shop</DropdownLinks >
                <DropdownLinks  href="g">spa shop</DropdownLinks >
                <DropdownLinks  href="g">natural shop</DropdownLinks >
              </DropdownMenu>
              <DropdownMenu>
                <DropdownLinks  href="g">Beauty salon</DropdownLinks >
                <DropdownLinks  href="g">makeup salon</DropdownLinks >
                <DropdownLinks  href="g">mask shop</DropdownLinks >
                <DropdownLinks  href="g">spa shop</DropdownLinks >
                <DropdownLinks  href="g">natural shop</DropdownLinks >
              </DropdownMenu>
              <DropdownMenu>
                <DropdownLinks  href="g">Beauty salon</DropdownLinks >
                <DropdownLinks  href="g">makeup salon</DropdownLinks >
                <DropdownLinks  href="g">mask shop</DropdownLinks >
                <DropdownLinks  href="g">spa shop</DropdownLinks >
                <DropdownLinks  href="g">natural shop</DropdownLinks >
              </DropdownMenu>
              <img
                src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/header/dropdown-menu-banner.png"
                alt=""
              ></img>
            </DropdownSection>
          </ListItem>
          <ListItem>
            <NavLinks href="g">Blog</NavLinks>
          </ListItem>
          <ListItem>
            <NavLinks href="g">Contact</NavLinks>
          </ListItem>
        </MainNav>
        <MainNav>
          <ListItem>
            <img
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/header/search-icon.png"
              alt=""
            />
          </ListItem>
          <ListItem>
            <img
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/header/wishlist-icon.png"
              alt=""
            />
          </ListItem>
          <ListItem>
            <img
              src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/header/cart-icon.png"
              alt=""
            />
          </ListItem>
          <ListItem>
            <p>Cart: $0.00</p>
          </ListItem>
        </MainNav>
        <HamburgerMenu >
          <HamburgerIcons />
          <HamburgerIcons />
          <HamburgerIcons />
        </HamburgerMenu>
      </NavbarSection>
    </>
  );
};

export default Navbar;
