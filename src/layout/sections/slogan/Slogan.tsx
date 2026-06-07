import {Stat} from "./Stat.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import React from "react";
import {S} from "./Slogan_Styles.ts"

const statData = [
    {
        number: "4+",
        text: "Years of Experience"
    },
    {
        number: "10+",
        text: "Projects Delivered"
    },
    {
        number: "6",
        text: "Tech Stack Tools"
    },

]
export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <FlexWrapper gap={"90px"} wrap={"wrap"}>
                    <S.SloganTitle>About Me.</S.SloganTitle>
                    <S.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est
                        a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum
                        tellus elit sed risus.</S.Description>
                </FlexWrapper>
                <S.Stats>
                    {statData.map((s, index) => {
                        return <Stat number={s.number} key={index}
                                     text={s.text}
                        />
                    })}
                </S.Stats>
            </Container>
        </S.Slogan>
    );
};

