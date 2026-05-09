import React from 'react';
import photo from "../assets/img/photo.webp";
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper.tsx";
import {SectionTitle} from "./SectionTitle.tsx";

export const Profile = () => {
    return (
        <div>
            <SectionTitle>What I Can Do To Help Build Your Product</SectionTitle>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis.</p>

            <FlexWrapper>
                <Photo src={photo} alt=""/>
                <FlexWrapper direction={"column"}>
                    <span>Homa</span>
                    <span>Frontend Developer</span>
                </FlexWrapper>
            </FlexWrapper>
            <FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <span>Accessibility</span>
                    <span>100%</span>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <span>Responsive</span>
                    <span>100%</span>
                </FlexWrapper>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`

