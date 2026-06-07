import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Profile} from "../slogan/Profile.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from './Skills_Styles.ts';
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "css",
        title: "CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 24 24"
    },
    {
        iconId: "typescript",
        title: "Typescript",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "react",
        title: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 16 16"
    },
    {
        iconId: "styled-components",
        title: "Styled Components",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 37 37"
    },
    {
        iconId: "web-design",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        viewBox: "0 0 36 36"
    },

]


export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <FlexWrapper gap={"145px"}>
                    <S.SkillsWrapper>
                        <Fade cascade={true} damping={0.015}>
                            {skillData.map((s, index) => {
                                return <Skill iconId={s.iconId} key={index}
                                              title={s.title}
                                              description={s.description}
                                              viewBox={s.viewBox}/>
                            })}
                        </Fade>
                    </S.SkillsWrapper>

                    <Profile/>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

