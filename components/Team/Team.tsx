import classes from './Team.module.css';
import {Flex, Image, SimpleGrid, Title} from "@mantine/core";
import NextImage from "next/image";
import {useEffect, useState} from "react";
import {MemberType} from "@/pages/about/team";

export default function Team(props: {
    team: MemberType[],
    title: string,
    subtitle: string
}) {
    const [url, setUrl] = useState<Location["host"]>();

    useEffect(() => {
        setUrl(window.location.host);
    }, []);

    console.log(url);
    const mapTeams = props.team.map((member: MemberType) => {
        return (
            <div className={classes.member} key={member.name}>
                <div>
                    <Image
                        src={member.pic}
                        radius="xl"
                        h={200}
                        w={200}
                        alt={`Picture of ${member.name}`}
                        component={NextImage}
                        placeholder={"blur"}

                    />
                </div>
                <h2 className={classes.h}>{member.name}</h2>
                <h3 className={classes.h}>{member.role}</h3>
                <p>{member.about}</p>
            </div>
        )
    });

    return (
        <Flex direction={"column"}>
            <Flex className={classes.topDiv}>
                <Title order={1} className={classes.head}>
                    {props.title}
                </Title>
                <Title order={2} className={classes.sub}>
                    {props.subtitle}
                </Title>
            </Flex>
            <SimpleGrid cols={{
                base: 1,
                sm: 2,
                lg: 3,
                xl: 4
            }} mx="auto">
                {mapTeams}
            </SimpleGrid>
        </Flex>
    );
}
