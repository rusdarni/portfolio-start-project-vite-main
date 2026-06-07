import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Skills = styled.section`
    position: relative;
    
    flex-shrink: 1;
    ${Container} {
        > ${FlexWrapper} {
            @media ${theme.media.dekstopS} {
                flex-direction: column;
                gap: 40px;
            }
        }
    }


`

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    justify-content: center;
    width: 100%;
    

    @media ${theme.media.dekstopS} {
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        max-width: 100%;
    }

    @media ${theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Skill = styled.div`
    border-radius: 30px;
    width: 100%;
    background-image: ${theme.colors.accent};
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 20px;
    height: 100%

`

const SkillTitle = styled.h3`
`

const SkillText = styled.p`
    text-align: center;
`

export const S = {
    Skills,
    SkillsWrapper,
    Skill,
    SkillTitle,
    SkillText
}