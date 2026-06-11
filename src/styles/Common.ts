import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    letterSpacing?: string | number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, letterSpacing, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryBg};
    line-height: ${lineHeight || 1.2};
    letter-spacing: ${letterSpacing || "normal"};
    font-size: clamp(
    ${Fmin}px,
    calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px),
    ${Fmax}px
    );
`