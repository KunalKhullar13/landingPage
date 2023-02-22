import React from 'react'
import {StyledFooterStrip,CopyrightSection,TermsAndConditions} from './styled'
const FooterStrip = () => {
  return (
    <StyledFooterStrip>
        <CopyrightSection>© Copyright 2020 Beauty</CopyrightSection>
        <TermsAndConditions>Privacy Policy | Terms & Conditions | Site map</TermsAndConditions>
    </StyledFooterStrip>
  )
}

export default FooterStrip