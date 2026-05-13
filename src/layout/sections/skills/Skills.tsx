import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Profile} from "../../../components/Profile.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <FlexWrapper gap={"145px"}>
                    <SkillsWrapper>
                            <Skill iconId={"code"}
                                   title={"HTML5"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 16 16"}/>
                            <Skill iconId={"css"}
                                   title={"CSS"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 24 24"}/>
                            <Skill iconId={"typescript"}
                                   title={"Typescript"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 16 16"}/>
                            <Skill iconId={"react"}
                                   title={"React"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 16 16"}/>
                            <Skill iconId={"styled-components"}
                                   title={"Styled Components"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 37 37"}/>
                            <Skill iconId={"web-design"}
                                   title={"Web Design"}
                                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                   viewBox={"0 0 36 36"}/>

                    </SkillsWrapper>

                    <Profile/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section``

const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    max-width: 591px;  /* 288px * 3 + 20px * 2 */
    //flex-shrink: 0;
`