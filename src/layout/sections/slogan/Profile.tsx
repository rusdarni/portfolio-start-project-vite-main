import photo from "../../../assets/img/photo.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {S} from "./Slogan_Styles.ts"
import React from "react";

const aboutData = [
    {
        percentage: "+100%",
        span: "Accessibility"
    },
    {
        percentage: "+100%",
        span: "Responsive"
    }
]

export const Profile: React.FC = () => {
    return (
        <S.Profile>
            <SectionTitle>What I Can Do To Help Build Your Product</SectionTitle>
            <S.SectionDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac
                aliquet odio mattis.</S.SectionDescription>
            <S.Wrapper>
                <FlexWrapper>
                    <S.Photo src={photo} alt=""/>
                    <FlexWrapper direction={"column"} justify={"center"} gap={"5px"}>
                        <S.Name>Homa</S.Name>
                        <S.Position>Frontend Developer</S.Position>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper gap={"60px"}>

                    {aboutData.map((item, index) => {
                        return <FlexWrapper key={index} direction={"column"}>
                            <S.Percentage>{item.percentage}</S.Percentage>
                            <S.Span>{item.span}</S.Span>
                        </FlexWrapper>
                    })}

                </FlexWrapper>
            </S.Wrapper>
        </S.Profile>
    );
};

