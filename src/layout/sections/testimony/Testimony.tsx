import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper direction={"column"} align={"center"}>
                <span>“</span>
                <Slider/>
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background-color: #181e41;
`