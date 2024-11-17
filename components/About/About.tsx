'using client';
import classes from './About.module.css';
import {Flex, Group, Image, Text, Title} from "@mantine/core";

//TODO: CSS needs work

export default function About() {
    return (
        <div>
            <Title order={1} ta={"center"}
                   className={classes.heading}
                   mb={"md"}
            >Our Mission</Title>
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
                    The Columbia Queer Business Society (CQBS) is the first
                    pre-professional LGBTQ community at Columbia University
                    established in 2011, bringing together students interested
                    in fields such as consulting, finance, technology, and
                    public-sector business. We strive to de-stigmatize being
                    “out” in the industry by fostering a supportive community
                    and providing networking opportunities.
                    We thrive on collaboration and frequently partner with
                    companies and organizations, primarily within the banking,
                    consulting, and technology sectors. Some of our past
                    partners include Goldman Sachs, McKinsey & Company, Google,
                    and Bain & Company.
                    <br/>
                </Text>
                <Image className={classes.img}
                       radius="lg"
                       src="https://news.columbia.edu/sites/default/files/styles/cu_crop/public/content/2021/columbia-rainlow-pride-2021.png?itok=A1yDaEv9"
                       alt="Monkey 1"
                />
            </Flex>
        </div>
    );
}
