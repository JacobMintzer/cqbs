import Contact from "@/components/Contact/Contact";
import Head from "next/head";
import React from "react";

const title = "Contact Us";
const subtitle = "If you would like to contact CQBS about anything, please" +
    " contact:"
const contactName = "Enzo Kim";
const bottomtitle = "We welcome all inquiries regarding Alumni Relations," +
    " Sponsorship, Recruiting, External Media, and other LGBTQ" +
    " organizations from both Columbia and the wider community!";

export default function ContactUs() {

    return (
        <>
            <Head>
                <title>Contact Us | Columbia Queer Business Society</title>
            </Head>
            <Contact />
        </>
    );
}
