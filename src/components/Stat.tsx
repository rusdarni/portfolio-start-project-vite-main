import styled from "styled-components";

type StatPropsType = {
    number: string
    text: string
}
export const Stat = (props: StatPropsType) => {
    return (
        <StyledStat>
            <StatNumber>{props.number}</StatNumber>
            <StatSpan>{props.text}</StatSpan>
        </StyledStat>
    );
};

const StyledStat = styled.div`

`
const StatNumber = styled.div`

`

const StatSpan = styled.span`

`