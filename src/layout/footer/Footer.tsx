import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {Contact} from "../../components/Contact.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"}>
                <Contact/>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"upwork"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"github"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Created by <Strong>Zarror</Strong> | All Reserved!</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #000;
    min-height: 20vh;
`

const SocialList = styled.ul`
    display: flex;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`

const Strong = styled.b`

`
