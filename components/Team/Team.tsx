'use client';

import classes from './Team.module.css';
import {Image} from "@mantine/core";

export default function Team() {

    return (
        <div>
            <h1 className={classes.head}>Team</h1>
            <p className={classes.sub}>Meet the team</p>
            <div className={classes.team}>
                <div className={classes.member}>
                    <div>
                        <Image
                            src="/avatar2.png"
                            radius="xl"
                            h={200}
                            w={200}
                            />
                    </div>
                    <h2>Bongduk Lee</h2>
                    <p>President</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgBorder}>
                        <Image
                            src="/avatar2.png"
                            radius="xl"
                            h={200}
                            w={200}
                        />
                    </div>
                    <h2>Jiho Park</h2>
                    <p>Vice President</p>
                </div>
                <div className={classes.member}>
                    <div className={classes.imgBorder}>
                        <Image
                            src="/avatar2.png"
                            radius="xl"
                            h={200}
                            w={200}
                        />
                    </div>
                    <h2>Matthew Riniker</h2>
                    <p>Secretary</p>
                </div>
            </div>
        </div>
    );
}
