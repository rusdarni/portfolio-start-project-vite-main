import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Profile} from "../../../components/Profile.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"code"}
                           title={"html5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill iconId={"css"}
                           title={"css"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill iconId={"typescript"}
                           title={"typescript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill iconId={"react"}
                           title={"react"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill iconId={"styled-components"}
                           title={"styled components"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                    <Skill iconId={"web-design"}
                           title={"web design"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>

                </FlexWrapper>
                <Profile/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #623b3b;
    min-height: 100vh;
`