import React from "react";
import {S} from "./Logo_Styles.ts"
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
            <S.LogoWrapper onClick={()=>{scroll.scrollToTop()}}>
                    <S.Logo>H</S.Logo>
                    <S.Label>Homa</S.Label>
            </S.LogoWrapper>
    );
};

