import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    background: ${theme.colors.tertiaryBg};
    padding: 25px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

export const S = {
    Header
}