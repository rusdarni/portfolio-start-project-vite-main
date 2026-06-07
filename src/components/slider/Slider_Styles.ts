import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Slider = styled.div`
    max-width: 793px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    z-index: 1;
`
const Slide = styled.div`
    text-align: center;
`

const SpanWrapper = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 100px;
    text-align: center;
    display: inline-block;
`

const Name = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: 0.01em;
    display: inline-block;
`
const Position = styled.span`
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.02em;
    text-align: center;
    margin: 10px 0 20px 0;
    display: inline-block;
`

const Text = styled.p`
    font-size: 20px;
    letter-spacing: 0.02em;
    text-align: center;
    margin-bottom: 40px;
    
`

const DotImage = styled.img<{ isActive: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    margin: 0 20px;
    opacity: ${props => props.isActive ? 1 : 0.4};
    transform: ${props => props.isActive ? 'scale(1.4)' : 'scale(1)'};
    transition: ${theme.animations.transition};
    
    &:hover {
        opacity: 1;
    }
`;

export const S = {
    Slider,
    Slide,
    SpanWrapper,
    Name,
    Position,
    Text,
    DotImage
}