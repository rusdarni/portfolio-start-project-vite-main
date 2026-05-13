import {Icon} from "../../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
    width?: string
    height?: string
    viewBox?: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} gap={"10px"}>
                <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    border-radius: 30px;
    max-width: 288px;
    width: 100%;
    background-image: ${theme.colors.accent};
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.25);
    padding: 20px;


`

const SkillTitle = styled.h3`
    font-weight: 700;
    font-size: 20px;
    color: ${theme.colors.primaryBg};
`

const SkillText = styled.p`
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    color: ${theme.colors.fontLight}
`