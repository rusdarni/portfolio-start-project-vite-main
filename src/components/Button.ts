import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const Button = styled.button`
    border-radius: 30px;
    padding: 20px 40px;
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.primaryBg};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    background-image: ${theme.colors.accent};

`