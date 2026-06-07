import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Footer = styled.footer`
    position: relative;
    background-color: ${theme.colors.quaternaryBg};
`

const SocialList = styled.ul`
    display: flex;
    gap: 25px;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
    background-color: ${theme.colors.circle};

    border-radius: 50%;
    padding: 10px;
    width: 45px;
    height: 45px;
    transition: ${theme.animations.transition};
    color: ${theme.colors.fontLight};

    display: flex;
    justify-content: center;

    &:hover {
        color: ${theme.colors.font};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    padding: 100px 0 54px 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.8;
    letter-spacing: 0.02em;
    text-align: center;
    color: ${theme.colors.fontLight};
`

const Strong = styled.b`
    color: ${theme.colors.primaryBg};
`

export const S = {
    Footer,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    Strong
}