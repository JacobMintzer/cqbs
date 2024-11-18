import classes from './Mission.module.css';
import {Flex, Image, Text, Title} from "@mantine/core";
import NextImage from 'next/image'

//TODO: CSS needs work

export default function Mission(props : any) {
    return <div>
        <Title order={1}
               className={classes.heading}
        >
            {props.title}
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
                {props.missionStatement.map((p: string, index : number) => {
                    return(
                        <>
                            {p}
                            <br/>
                            <br/>
                        </>
                    )
                })}
            </Text>
            <Image className={classes.img}
                   radius="lg"
                   src={props.imgSrc}
                   alt={props.imgAlt}
                   mt={"xs"}
            />
        </Flex>
    </div>;
}
