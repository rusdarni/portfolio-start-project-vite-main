import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contacts_Styles.ts"
import React, {ElementRef, useRef} from "react";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return


        emailjs.sendForm('service_eczd507', 'template_u30kxnr', form.current, {
            publicKey: 'jslHu6FmpsXRDkcWx',
        })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };


    return (
        <S.Contacts id={"contact"}>
            <Container>
                <S.Wrapper>
                    <SectionTitle>Send me a <S.Message>message</S.Message>, I will be touch with you
                        shortly.</SectionTitle>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={"Your Name"} name={'user_name'}/>
                        <S.Field required placeholder={"Your Subject"} name={'subject'}/>
                        <S.Field required placeholder={"Enter Your Email Adress"} name={'email'}/>
                        <S.Field required placeholder={"Your Message"} as={"textarea"} name={'message'}/>
                        <Button type={"submit"}><Icon iconId={"mail"} height={"18"} width={"18"} viewBox={"0 0 20 20"}/>Send
                            Message</Button>
                    </S.Form>
                </S.Wrapper>
            </Container>
        </S.Contacts>
    );
};


