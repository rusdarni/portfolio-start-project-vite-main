import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";

const Slogan = styled.section`
    
     ${FlexWrapper}{
         margin-bottom: 50px;
         @media ${theme.media.tablet} {
             gap: 30px;
             margin-bottom: 30px;
         }
         
     }
 
`

const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
        max-width: min-content;
        width: 100%;
    }

    gap: 15px;

    @media ${theme.media.tablet} {
        & > * {
            max-width: 100%;
        }
        & > :nth-child(2) {
            order: -1;
        }
        
    }
}
`

const SloganTitle = styled.h2`
    ${font({weight: 700, letterSpacing: "0", Fmax: 100, Fmin: 75})};
    max-width: 315px;
    padding-left: 10px;
    @media ${theme.media.tablet} {
        max-width: 100%;
        width: 100%;
        padding-left: 0;
    }
`

const Description = styled.p`
    ${font({weight: 500, color: theme.colors.fontLight, lineHeight: 1.8, letterSpacing: "0.01em", Fmax: 30, Fmin: 17})};
    flex: 1 0 320px;

    @media ${theme.media.tablet} {
        flex: 1 1 auto;
    }
    
`

const Stat = styled.div`
    display: flex;
    gap: 10px;
    @media ${theme.media.tablet} {
        gap: 15px;
    }
    
`

const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${theme.media.tablet} {
        min-width: 114px;
        justify-content: flex-end;
    }
`


const StatNumber = styled.span`
    ${font({weight: 700, lineHeight: 1.8, letterSpacing: "0.01em", Fmax: 50, Fmin: 32})};

    border-radius: 30px;
    padding: 20px 30px;
    max-width: fit-content;
    width: 100%;
    box-shadow: 0 10px 4px 0 rgba(0, 0, 0, 0.25);
    background: ${theme.colors.accent};


    @media ${theme.media.tablet} {
        font-size: 32px;
    }
`

const StatSpan = styled.span`
    ${font({weight: 500, letterSpacing: "0.01em", Fmax: 30, Fmin: 20})};
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
const Profile = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
    max-width: 460px;
    width: 100%;

    @media ${theme.media.dekstopS} {
        max-width: 100%;
    }

    ${SectionTitle}{
        margin-bottom: 10px;

        @media ${theme.media.dekstopS} {
            margin-bottom: 20px;
        }
    }
    
`

const Wrapper = styled.div`
    max-width: 420px;
    width: 100%;

    > ${FlexWrapper}:last-child {
        padding: 40px 0 0;
        @media ${theme.media.dekstopS} {
            padding: 20px 0 0;
        }
    }

    > ${FlexWrapper}:first-child {
        padding-bottom: 40px;
        border-bottom: 1px solid ${theme.colors.quaternaryBg};
        @media ${theme.media.dekstopS} {
            padding-bottom: 20px;
        }
    }
`


const Name = styled.span`
    ${font({weight: 500, color: theme.colors.quaternaryBg, letterSpacing: "0.02em", Fmax: 20, Fmin: 14})}
`

const Position = styled.span`
    ${font({weight: 300, color: theme.colors.quaternaryBg, lineHeight: 0.25, letterSpacing: "0.02em", Fmax: 15, Fmin: 14})}
`

const Percentage = styled.span`
    ${font({weight: 600, color: theme.colors.quaternaryBg, lineHeight: 1.8, letterSpacing: "0.01em", Fmax: 36, Fmin: 24})}
`

const Span = styled.span`
    padding-left: 15px;
    padding-top: 5px;
    ${font({weight: 400, color: theme.colors.font, lineHeight: 0.93333, letterSpacing: "0.02em", Fmax: 15, Fmin: 14})}
`

const Photo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
    @media ${theme.media.dekstopS} {
        margin-right: 20px;
    }
`

const SectionDescription = styled.p`
    ${font({weight: 400, color: theme.colors.font, lineHeight: 1.8, letterSpacing: "0.02em", Fmax: 20, Fmin: 14})}
    margin-bottom: 40px;
    @media ${theme.media.dekstopS} {
        margin-bottom: 20px;
    }
    
`



export const S = {
    Slogan,
    Stats,
    SloganTitle,
    Description,
    Stat,
    StatsContainer,
    StatNumber,
    StatSpan,
    Profile,
    Wrapper,
    Name,
    Position,
    Percentage,
    Span,
    Photo,
    SectionDescription
}