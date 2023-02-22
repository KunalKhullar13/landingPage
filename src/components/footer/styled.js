import styled from "styled-components";
export const FourGridContainer = styled.div`
display: flex;
flex-wrap:wrap;
max-width:80%;
margin: auto;
justify-content: space-between;
padding:0;
`
export const FourGridItem = styled.div`
max-width:30%;
margin-top:1rem;
@media (max-width:1180px){
    max-width:90%;
}
`

export const FooterMenus = styled.div`

img {
    margin: 1rem 0 0 5px;
}
`
export const MenuHeader = styled.h2`
font-size:20px;
font-weight:500;
`
export const FooterList = styled.ul`
list-style-type: none;
text-align:left;

`
export const FooterText = styled.div`
display: flex;
align-items: baseline;
padding:5px;
p {
    color: #888;
    margin: 0px 10px 0px 0px;
}
span {
    color: #111;
}
`
export const StyledFooterStrip = styled.div`
background-color: #f7f5f4;
margin-top:2rem;
flex-wrap: wrap;
display:flex;
padding: 0px 10% 0px 10%;
justify-content: space-between;
`
export const CopyrightSection = styled.p`
color: #888
`
export const TermsAndConditions = styled.p`
color: #888
`