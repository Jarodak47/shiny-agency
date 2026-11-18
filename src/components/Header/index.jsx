import styled from  'styled-components'
import logo from '../../assets/dark-logo.png'
import {StyledLink, LinksWrapper} from '../../utils/styles/link'

const StyledLogo = styled.img`
    width: 187.6288604736328px;
    height: 70px;
    top: 30px;
    left: 33px;
`

function Header() {
    // console.log({questionNumber})
    // const surveyRoute = "/survey/"+{questionNumber}
    // console.log({surveyRoute})
    return (
        <nav style={{ display: "flex", alignItems: "center", padding: "20px" }}>
            <StyledLogo src={logo} alt="Logo" />
            <LinksWrapper>
              <StyledLink to="/" >Accueil</StyledLink>
              <StyledLink to="/freelances" style={{}}>Profils</StyledLink>
              <StyledLink to="/survey/1" $isFullLink  style={{}}>Faire le test</StyledLink>
            </LinksWrapper>

            {/* <Link to="/results">Results</Link> */}

        </nav>
    )
}
export default Header