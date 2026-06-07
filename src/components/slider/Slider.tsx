import customer1 from "../../assets/img/customer1.webp";
import customer2 from "../../assets/img/customer2.webp";
import customer3 from "../../assets/img/customer3.webp";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import {S} from "./Slider_Styles.ts"
import {FlexWrapper} from "../FlexWrapper.ts";

type SlidePropsType = {
    userName: string
    position: string
    text: string
}
const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.SpanWrapper>“</S.SpanWrapper>
                <S.Name>{props.userName}</S.Name>
                <S.Position>{props.position}</S.Position>
                <S.Text>{props.text}</S.Text>
            </FlexWrapper>
        </S.Slide>
    )
}


const items = [
    <Slide userName={"John Wick"} position={"Manager"}
           text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquen"}/>,
    <Slide userName={"Jardani Jovanovic"} position={"Manager"}
           text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquen"}/>,
    <Slide userName={"Jonathan Wick"} position={"Manager"}
           text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquen"}/>,
];

const dotsImages = [
    customer1,
    customer2,
    customer3,
];

export const Slider = () => (
        <S.Slider>
            <AliceCarousel
                mouseTracking
                items={items}
                disableDotsControls={false}
                activeIndex={1}
                renderDotsItem={({ isActive, activeIndex }) => (
                    <S.DotImage
                        src={dotsImages[activeIndex]}
                        alt={`customer ${activeIndex + 1}`}
                        isActive={isActive}
                    />
                )}
            />
        </S.Slider>
);

