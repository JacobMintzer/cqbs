import Students from '../../components/Students/Students';
import Head from "next/head";
import React from "react";
import Script from "next/script";

const title: string = "Welcome Prospective Students";
const subtitle: string = "Welcome! We're thrilled to have you here. Please think" +
    " of" +
    " us as a helpful resource – we are happy to delve into what life is" +
    " like at CQBS or simply chat. If you'd like to connect with a current" +
    " member of CQBS, kindly fill out the form below. We'll reach out to you" +
    " as soon as possible!";

export default function ProspectiveStudentsPage() {
    return (
        <>
            <Head>
                <title>Potential Students | Columbia Queer Business
                    Society
                </title>
            </Head>
            <Students
                title={title}
                subtitle={subtitle}
            />
        </>
    );
}
