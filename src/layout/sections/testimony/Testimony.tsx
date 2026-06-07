import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./Testimony_Styles.ts"

export const Testimony: React.FC = () => {
    return (
        <S.Testimony id={"testimony"}>
            <Container>
                <FlexWrapper justify={"center"}>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.Testimony>
    );
};


