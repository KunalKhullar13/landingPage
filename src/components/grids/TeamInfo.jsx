import React from "react";
import { ThreeGridContainer, TeamInfoCard, TeamInfoSection, TeamData, MemberName, MemberRole, TeamInfoHeader,MemberImage } from "./styled";

const TeamInfo = () => {
  return(
   <TeamInfoSection>
    <TeamInfoHeader>Professional Team</TeamInfoHeader>
  <ThreeGridContainer>
    <TeamInfoCard>
      <MemberImage src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/team/teamOne/1.png" alt="" />
      <TeamData>
        <MemberName>Danielle Welling</MemberName>
        <MemberRole>Nail Master</MemberRole>
        <p>Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.</p>
      </TeamData>
    </TeamInfoCard>
    <TeamInfoCard>
    <MemberImage src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/team/teamOne/2.png" alt="" />
      <TeamData>
        <MemberName>Cali Lees</MemberName>
        <MemberRole>Administrator</MemberRole>
        <p>Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.</p>
      </TeamData>
    </TeamInfoCard>
    <TeamInfoCard>
    <MemberImage src="https://eliah-react-dfd2nqbsf-themesflat.vercel.app/assets/images/team/teamOne/3.png" alt="" />
      <TeamData>
        <MemberName>Danielle Welling</MemberName>
        <MemberRole>Hair Stylist</MemberRole>
        <p>Ipsum dolor amet, consectetur adipiscing sedo lacus facilisis.</p>
      </TeamData>
    </TeamInfoCard>
  </ThreeGridContainer>
  </TeamInfoSection>
)};

export default TeamInfo;
