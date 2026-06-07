import styled from "styled-components";
import Rectangle from "../../../assets/img/Rectangle.svg"

const Testimony = styled.section`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        z-index: 1;
        width: 50%;
        top: 0;
        left: 0;
        position: absolute;
        height: 100%;
        background-image: url(${Rectangle});
        background-size: cover;
    }
`

export const S = {
    Testimony
}