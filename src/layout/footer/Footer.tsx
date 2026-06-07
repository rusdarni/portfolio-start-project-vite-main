import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {S} from "./Footer_Styles.ts"
import React from "react";

const socialItemsData = [
    {
        iconId: "upwork",
        viewBox: "0 0 25 25"
    },
    {
        iconId: "telegram",
        viewBox: "0 0 21 21"
    },
    {
        iconId: "linkedin",
        viewBox: "0 0 25 25"
    },
    {
        iconId: "github",
        viewBox: "0 0 25 25"
    },
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.SocialList>
                    {socialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon height={"25"} width={"25"} viewBox={s.viewBox} iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>Created by <S.Strong>Zarror</S.Strong> | All Reserved!</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

