import styled from "styled-components";
import homeIllustration from "../../assets/home-illustration.svg";
import { StyledLink } from "../../utils/styles/link";
// Conteneur principal en Flexbox
const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 80px 20px;
  }
`;



const BackgroundWrapper = styled.div`
  position: relative;
  margin: 139px 35px 0px 35px;
  background: #F9F9FC; /* ton background */
  min-height: 76vh;
  overflow-x: hidden;


`;



const StyledP = styled.p`
  max-width: 552px;
  font-weight: 700px;
  font-size: 50px;
  line-height: 161%;
  text-align: justify;


  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

const StyledImage = styled.img`
  width: 541px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

function Home() {
  return (
    <BackgroundWrapper>
      <HomeContainer>
        <StyledP>
          Repérez vos besoins,<br />
          on s’occupe du reste,<br />
          avec les meilleurs<br />
          talents<br />
          <StyledLink to="/survey/1" $isFullLink >Faire le test</StyledLink>

        </StyledP>
        <StyledImage src={homeIllustration} alt="Illustration d'accueil" />
      </HomeContainer>
    </BackgroundWrapper>
  );
}


export default Home;