import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Stat} from "../../../components/Stat.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>About Me.</SectionTitle>
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                tellus elit sed risus.</Description>
            <Stat number={"4+"}
                  text={"Years of Experience"}/>
            <Stat number={"10+"}
            text={"Projects Delivered"}/>
            <Stat number={"6"}
            text={"Tech Stack Tools"}/>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #a60de7;
`

const Description = styled.p`
`