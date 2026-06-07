import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";

const Contacts = styled.div`
    position: relative;
    background-color: ${theme.colors.quaternaryBg};
    padding: 100px 0;

    ${SectionTitle} {
        text-align: center;
        margin-bottom: 50px;
        ${font({Fmax: 50, Fmin: 36})}
    }
    @media ${theme.media.tablet} {
        padding: 80px 0;
    }
`

const Wrapper = styled.div`
    padding: 0 100px;

    @media ${theme.media.dekstopS} {
        padding: 0 20px;
    }

    @media ${theme.media.tablet} {
        padding: 0 100px;
    }

    @media ${theme.media.mobile} {
        padding: 0 20px;
    }
`

const Form = styled.form`
    max-width: 995px;
    width: 100%;


    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 140px 218px;
    align-items: end;

    @media ${theme.media.tablet} {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, auto);
    }

    textarea {
        resize: none;
        grid-column: 2;
        grid-row: 1 / 3;
        height: 100%;
        @media ${theme.media.tablet} {
            grid-column: 1;
            grid-row: 4 / 6;
        }
    }

    ${Button} {
        grid-column: 2;
        grid-row: 3;
        justify-self: end;
        align-self: end;
        white-space: nowrap;
        transition: ${theme.animations.transition};
        &:hover {
            transform: translateY(-4px);
        }


        ${font({weight: 400, Fmax: 20, Fmin: 14})}

        @media ${theme.media.tablet} {
                grid-column: 1;
                grid-row: 6;
                justify-self: start;
                align-self: start;
            }
    }

`
const Message = styled.span`
    background: ${theme.colors.accent};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Field = styled.input`
    max-width: 388px;
    height: 34px;
    width: 100%;
    background-color: ${theme.colors.quaternaryBg};

    border: none;
    border-bottom: 2px solid ${theme.colors.fontLight};
    outline: none;
    
    ${font({weight: 500, Fmax: 20, Fmin: 14})}


    &::placeholder {
        text-transform: capitalize;
        
    }

    &:focus-visible {
        border-bottom: 2px solid ${theme.colors.primaryBg};

        &::placeholder {
            color: ${theme.colors.primaryBg};
            opacity: 0;
        }
    }
    
    &:nth-child(2),
    &:nth-child(3) {
        grid-column: 1;
    }
    @media ${theme.media.tablet} {
        max-width: 515px;
    }
    
    
`

export const S = {
    Contacts,
    Wrapper,
    Form,
    Message,
    Field
}