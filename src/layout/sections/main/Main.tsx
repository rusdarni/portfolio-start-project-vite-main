import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper direction={"column"} align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>I’m <Name>Homa</Name>, a web developer. I will build frontend experiences that bring value to your company.</MainTitle>
                </div>

                <FlexWrapper>
                    <StatItem>
                        <StatTitle>Frontend Developer</StatTitle>
                        <StatYears>4 years</StatYears>
                    </StatItem>
                    <Photo src={photo} alt=""/>
                    <StatItem>
                        <StatTitle>Modern Web (React / Vue / TS)</StatTitle>
                        <StatYears>2 years</StatYears>
                    </StatItem>
                </FlexWrapper>
            </FlexWrapper>
        </StyledMain>
    );
};


const Photo = styled.img`
    border-radius: 200px;
    width: 393px;
    height: 600px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    object-fit: cover;
`

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff;
`

const MainTitle = styled.h1`

`

const Name = styled.b`

`

const StatItem = styled.div`

`

const StatTitle = styled.span`

`

const StatYears = styled.span`

`