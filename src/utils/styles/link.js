import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/styles/color";

const StyledLink = styled(Link)`  

  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  right: 30%;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
const LinksWrapper = styled.div`
  top: 0px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

export { StyledLink, LinksWrapper };
