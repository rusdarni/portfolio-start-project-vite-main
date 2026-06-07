import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
import RectangleMain from '../../../assets/img/rectangle-main.svg'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";

const Main = styled.section`
    position: relative;
    padding: 170px 0 45px 0;
    overflow: clip;
    @media ${theme.media.mobile} {
        padding: 145px 0 25px 0;
    }
    ${FlexWrapper}:nth-child(2){
        @media ${theme.media.dekstopS} {
            max-height: 605px;
            flex-direction: column;
            gap: 50px;
        }
        @media ${theme.media.tablet} {
            flex-direction: row;
            gap: 50px;
            max-height: fit-content;
        }
        @media ${theme.media.mobile} {
            gap: 20px;
        }
    }
`


const Photo = styled.img`
    border-radius: 200px;
    width: 393px;
    height: 600px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    object-fit: cover;
    align-self: stretch;
    
    @media ${theme.media.mobile} {
        width: 314px;
        height: 480px;
    }
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: "";
        display: inline-block;
        height: 300px;
        width: 300px;
        background-image: url(${RectangleMain});
        position: absolute;
        top: 37px;
        left: 216px;
        z-index: -1;

        @media ${theme.media.mobile} {
            top: 32px;
            left: 130px;
        }
    }
    @media ${theme.media.dekstopS} {
        order: 1;
    }
    @media ${theme.media.tablet} {
        order: -1;
    }
    
`

const MainTitle = styled.h1`
    ${font({weight: 700, color: theme.colors.quaternaryBg, letterSpacing: "0.01em", Fmax: 50, Fmin: 36})}
    text-align: center;
    padding: 0 56px 30px 56px;
    
    
`

const Name = styled.span`
    background: ${theme.colors.accent};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StatItem = styled.div`
    border-radius: 200px;
    width: 288px;
    height: 100px;
    box-shadow: 0 5px 5px 0 ${theme.colors.font};
    background: ${theme.colors.accent};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:first-child {
        
        margin-top: 82px;
        @media ${theme.media.tablet} {
            margin: 0;
        }
    }

    &:last-child {
        margin-bottom: 115px;
        align-self: flex-end;
        @media ${theme.media.tablet} {
            margin: 0;
        }
    }


}
`

const StatTitle = styled.span`
    ${font({weight: 700, Fmax: 20, Fmin: 14})}
`

const StatYears = styled.span`
    ${font({weight: 500, Fmax: 15, Fmin: 14})}
`

export const S = {
    Main,
    Photo,
    PhotoWrapper,
    MainTitle,
    Name,
    StatItem,
    StatTitle,
    StatYears
}