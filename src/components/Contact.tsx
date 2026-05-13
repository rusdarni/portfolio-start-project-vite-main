import styled from "styled-components";
import {SectionTitle} from "./SectionTitle.tsx";
import {Button} from "./Button.tsx";
import {Icon} from "./icon/Icon.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Send me a message, I will be touch with you shortly.</SectionTitle>
            <StyledForm>
                <Field placeholder={"Your Name"}/>
                <Field placeholder={"Your Subject"}/>
                <Field placeholder={"Your Message"} as={"textarea"}/>
                <Field placeholder={"Enter Your Email Adress"}/>
                <Button type={"submit"}><Icon iconId={"mail"}/>Send Message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    min-height: 50vh;
    background-color: #000000;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`

const Field = styled.input`

`
