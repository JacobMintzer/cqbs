import classes from './Team.module.css';
import {Flex, Image, Title} from "@mantine/core";

export default function Team(props : any) {

    const mapTeams = props.team.map((member : any) => {
        return (
            <div className={classes.member} key={member.name}>
                <div>
                    <Image
                        src={member.pic}
                        radius="xl"
                        h={200}
                        w={200}
                        alt={`Picture of ${member.name}`}
                        fallbackSrc={"/avatar2.png"}
                    />
                </div>
                <h2 className={classes.h}>{member.name}</h2>
                <h3 className={classes.h}>{member.role}</h3>
                <p>{member.about}</p>
            </div>
        )});

    return (
        <Flex direction={"column"}>
            <Flex className={classes.topDiv}>
                <Title order={1} className={classes.head}>
                    {props.title}
                </Title>
                <Title order={3} className={classes.sub}>
                    {props.subtitle}
                </Title>
            </Flex>
            <div className={classes.team}>
                {mapTeams}
            </div>
        </Flex>
    );
}
