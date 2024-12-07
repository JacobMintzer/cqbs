/**
 * Team Page
 */

import Team from '../../../components/Team/Team';
import React from "react";
import Footer from "@/components/Footer/Footer";
import {Flex} from "@mantine/core";
import NextImage from "next/image";

// This is how you should format each member
interface MemberType {
    name: string; // name of the member
    role: string; // role of the member
    about: string; // about or major
    pic: object; // imageObject imported from the public folder
}

// Import member photos (unfortunately, can't automate this, and it's for
// optimization purposes)
import Enzo from "@/public/Enzo.webp";
import Bobby from "@/public/Bobby.webp";
import Sai from "@/public/Sai.webp";
import AJ from "@/public/AJ.webp";
import Artemis from "@/public/Artemis.webp";
import Head from "next/head";

// Array of MemberType
const title : string = "Members of the Board";
const subtitle : string = "Meet your current board members!";
const team : Array<MemberType> = [
    {
        name: "Enzo Kim",
        role: "President",
        about: "Economics and Creative Writing",
        pic: Enzo
    },
    {
        name: "Bobby Veiham",
        role: "Vice President",
        about: "Computer Science",
        pic: Bobby
    },
    {
        name: "Sai Sai",
        role: "Secretary",
        about: "Psychology",
        pic: Sai
    },
    {
        name: "A.J. Lebenns",
        role: "Advisor",
        about: "Economics",
        pic: AJ
    },
    {
        name: "Artemis Edison",
        role: "Treasurer",
        about: "Economic History",
        pic: Artemis
    }
];

export default function TeamPage() {
    return (
        <>
            <Head>
                <title>Our Team | Columbia Queer Business Society</title>
            </Head>
            <Flex direction={"column"} gap={"xs"}>
                <Team
                    title={title}
                    subtitle={subtitle}
                    team={team}
                />
                <Footer />
            </Flex>
        </>
    );
}
