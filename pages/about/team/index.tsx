/**
 * Team Page
 */

import Team from '../../../components/Team/Team';
import React from "react";
import { Flex } from "@mantine/core";

// This is how you should format each member
export interface MemberType {
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
import Sabrina from "@/public/Sabrina.webp";
import Ashley from "@/public/Ashley.webp";
import Justin from "@/public/Justin.webp";
import Head from "next/head";

// Array of MemberType
const title: string = "Members of the Board";
const subtitle: string = "Meet your current board members!";
const team: Array<MemberType> = [
    {
        name: "Sai Sai",
        role: "President",
        about: "Psychology",
        pic: Sai
    },
    {
        name: "Enzo Kim",
        role: "Vice President",
        about: "Economics and Creative Writing",
        pic: Enzo
    },
    {
        name: "Ashley Wong",
        role: "Vice President",
        about: "Computer Science",
        pic: Ashley
    },
    {
        name: "Bobby Veiham",
        role: "Advisor",
        about: "Computer Science",
        pic: Bobby
    },
    {
        name: "Artemis Edison",
        role: "Treasurer",
        about: "Economic History",
        pic: Artemis
    },
    {
        name: "Justin Kiel",
        role: "Secretary",
        about: "Political Science",
        pic: Justin
    },
    {
        name: "A.J. Lebenns",
        role: "Advisor",
        about: "Economics",
        pic: AJ
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
            </Flex>
        </>
    );
}
