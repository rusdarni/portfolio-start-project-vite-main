import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <div>
            <LogoWrapper href="">
                    <StyledLogo>H</StyledLogo>
                    <StyledLabel>Homa</StyledLabel>
            </LogoWrapper>
        </div>
    );
};

const LogoWrapper = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 5px;
`

const StyledLogo = styled.div`
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.02em;
    border-radius: 100%;
    background-image: ${theme.colors.accent};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryBg};
 `

const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 20px;
    color: #fff;
`