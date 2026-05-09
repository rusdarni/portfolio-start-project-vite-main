import React from 'react';
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import socialImg from './../../../assets/img/portfolio-1.webp'
import timerImg from './../../../assets/img/portfolio-2.webp'

const worksItems = ["All", "landing page", "React", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"}
                      src={socialImg}
                      text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda deserunt exercitationem incidunt ipsa ipsum minus nobis, quos rem, similique temporibus voluptates. Aliquid atque eum fugit iste omnis suscipit vero?"}
                />
                <Work title={"Timer"}
                      src={timerImg}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae commodi culpa eum itaque laborum, nemo odit, porro quasi, reprehenderit sint tempora tenetur? Blanditiis explicabo, in quasi quo sapiente tempora!"}
                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #a60de7;
`