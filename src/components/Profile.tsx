import photo from "../assets/img/photo.webp";
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {SectionTitle} from "./SectionTitle.tsx";
import {theme} from "../styles/Theme.ts";

export const Profile = () => {
    return (
        <StyledProfile>
            <SectionTitle>What I Can Do To Help Build Your Product</SectionTitle>
            <SectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis.</SectionDescription>
            <Wrapper>
                <FlexWrapper>
                    <Photo src={photo} alt=""/>
                    <FlexWrapper direction={"column"} justify={"center"}>
                        <Name>Homa</Name>
                        <Position>Frontend Developer</Position>
                    </FlexWrapper>
                </FlexWrapper>
            </Wrapper>
                <FlexWrapper gap={"60px"}>
                    <FlexWrapper direction={"column"}>
                        <Percentage>100%</Percentage>
                        <Span>Accessibility</Span>
                    </FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <Percentage>100%</Percentage>
                        <Span>Responsive</Span>
                    </FlexWrapper>
                </FlexWrapper>
        </StyledProfile>
    );
};

const StyledProfile = styled.div`
    max-width: 461px;
    width: 100%;
    overflow: hidden;
`

const Wrapper = styled.div`
    margin: 40px 0 80px 0;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 1px solid ${theme.colors.quaternaryBg};
        width: 420px;
        height: 0;
        left: 0;
        top: 90px;
    }
`


const Name = styled.span`
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.02em;
    color: ${theme.colors.quaternaryBg};
`

const Position = styled.span`
    font-weight: 300;
    font-size: 15px;
    letter-spacing: 0.02em;
    line-height: 0.25;
    color: ${theme.colors.quaternaryBg};
`

const Percentage = styled.span`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.8;
    letter-spacing: 0.01em;
    color: ${theme.colors.quaternaryBg};
`

const Span = styled.span`
    font-weight: 400;
    font-size: 15px;
    line-height: 0.93333;
    letter-spacing: 0.02em;
    color: ${theme.colors.font};
`

const Photo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
`

const SectionDescription = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: 0.02em;
    color: ${theme.colors.font};
    margin-top: 10px;
`

