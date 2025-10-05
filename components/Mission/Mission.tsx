import classes from './Mission.module.css';
import { Flex, Image, Text, Title } from "@mantine/core";
import NextImage, { StaticImageData } from 'next/image';

export default function Mission(
    props: {
        title: string,
        missionStatement: string,
        imgSrc: StaticImageData,
        imgAlt: string
    }
) {
    const { title, missionStatement, imgSrc, imgAlt } = props;
    return <div>
        <Title order={1}
            className={classes.heading}
        >
            {title}
        </Title>
        <Flex direction={{
            base: 'column',
            md: 'row-reverse'
        }}
            gap={{
                base: 'xs',
                md: '4vw'
            }}
            align={{
                base: 'center',
                md: 'flex-start'
            }}
            justify={"center"}
            wrap={"wrap"}
        >
            <Text className={classes.paragraph} mb={{
                base: "0",
                md: "xl"
            }}
            >
                {missionStatement}
                <br />
                <br />
            </Text>
            <Image className={classes.img}
                radius="lg"
                src={imgSrc}
                alt={imgAlt}
                mt={"xs"}
                component={NextImage}
                placeholder={"blur"}
            />
        </Flex>
    </div>;
}
