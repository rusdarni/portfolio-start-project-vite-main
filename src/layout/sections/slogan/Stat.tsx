import {S} from "./Slogan_Styles.ts"

type StatPropsType = {
    number: string
    text: string
}
export const Stat = (props: StatPropsType) => {
    return (
        <S.Stat>
            <S.StatNumber>{props.number}</S.StatNumber>
            <S.StatSpan>{props.text}</S.StatSpan>
        </S.Stat>
    );
};

