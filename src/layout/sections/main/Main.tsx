import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {theme} from "../../../styles/Theme.ts";
import {Icon} from "../../../components/icon/Icon.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"space-around"}>
                    <div>
                        <MainTitle>I’m <Name>Homa</Name>, a web developer. I will build frontend experiences that bring
                            value to your company.</MainTitle>
                    </div>

                    <FlexWrapper>
                        <StatItem>
                            <StatTitle>Frontend Developer</StatTitle>
                            <StatYears>4 years</StatYears>
                        </StatItem>
                        <PhotoWrapper>
                            <Photo src={photo} alt=""/>
                            <IconWrapper>
                                <Icon iconId={'vector'} height={"300"} width={"300"} viewBox={"0 0 300 300"}/>
                            </IconWrapper>
                        </PhotoWrapper>
                        <StatItem>
                            <StatTitle>Modern Web</StatTitle>
                            <StatYears>2 years</StatYears>
                        </StatItem>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;

    padding: 165px 0 45px 0;
`


const Photo = styled.img`
    border-radius: 200px;
    width: 393px;
    height: 600px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    object-fit: cover;
    margin-bottom: 50px;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
`

const IconWrapper = styled.div`
    content: "";
    display: inline-block;
    position: absolute;
    top: 53px;
    left: 216px;
    z-index: -1;
`

const MainTitle = styled.h1`
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.01em;
    text-align: center;
    color: ${theme.colors.quaternaryBg};

    padding: 0 0 30px 0;
`

const Name = styled.b`
    background: ${theme.colors.accent};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StatItem = styled.div`
    border-radius: 200px;
    width: 288px;
    height: 100px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    background: ${theme.colors.accent};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:first-child {
        margin: 82px 15px 0 0;
    }

    &:last-child {
        margin: 389px 0 0 15px;
    }
`

const StatTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
    color: ${theme.colors.primaryBg};
`

const StatYears = styled.span`
    font-weight: 500;
    font-size: 15px;
    color: ${theme.colors.primaryBg};
`