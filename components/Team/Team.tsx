'use client';

import classes from './Team.module.css';
import {Image} from "@mantine/core";

const team = [
    {
        name: "Enzo Kim",
        role: "President",
        about: "Economics and Creative Writing",
        pic: "/oppar.png"
    },
    {
        name: "Bobby Veiham",
        role: "Vice President",
        about: "Computer Science",
        pic: "/avatar2.png"
    },
    {
        name: "Sai Sai",
        role: "Secretary",
        about: "Psychology",
        pic: "/avatar2.png"
    },
    {
        name: "A.J. Lebenns",
        role: "Advisor",
        about: "Economics",
        pic: "/avatar2.png"
    },
    {
        name: "Artemis Edison",
        role: "Treasurer",
        about: "Financial History",
        pic: "/avatar2.png"
    }
];

export default function Team() {

    return (
        <div>
            <h1 className={classes.head}>Members of the Board</h1>
            <h3 className={classes.sub}>Meet your current board members!</h3>
                        <div className={classes.team}>
                            {team.map((member) => {
                                return (
                                    <div className={classes.member} key={member.name}>
                                        <div>
                                            <Image
                                                src={member.pic}
                                                radius="xl"
                                                h={200}
                                                w={200}
                                            />
                                        </div>
                                        <h2 className={classes.h}>{member.name}</h2>
                                        <h3 className={classes.h}>{member.role}</h3>
                                        <p>{member.about}</p>
                                    </div>
                                )})}
                        </div>
                    </div>
                );
            }
