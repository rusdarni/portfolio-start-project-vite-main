import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Name>John Wick</Name>
                    <Position>Manager</Position>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                        a, mattis
                        tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                        tellus
                        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                        sociosqu
                        ad litora torquen</Text>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 793px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Slide = styled.div`
    text-align: center;
`

const Name = styled.span`

`
const Position = styled.span`
`

const Text = styled.p`

`

const Pagination = styled.span`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: deeppink;
    }
`