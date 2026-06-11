import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./Main_Styles.ts";
import Tilt from 'react-parallax-tilt'


export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>

                    <S.MainTitle>I’m <S.Name>Homa</S.Name>, a web developer. I will build frontend experiences that
                        bring
                        value to your company.</S.MainTitle>
                    <FlexWrapper wrap={"wrap"} justify={"center"} gap={"13px"}>
                        <S.StatItem as={Tilt}>
                                <S.StatTitle>Frontend Developer</S.StatTitle>
                                <S.StatYears>4 years</S.StatYears>
                        </S.StatItem>
                            <S.PhotoWrapper>
                                <S.Photo src={photo} alt="Homa" fetchPriority="high"/>
                            </S.PhotoWrapper>
                        <S.StatItem as={Tilt}>
                            <S.StatTitle>Modern Web</S.StatTitle>
                            <S.StatYears>2 years</S.StatYears>
                        </S.StatItem>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

