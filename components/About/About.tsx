'using client';
import classes from './About.module.css';
import {Flex, Group, Image, Text} from "@mantine/core";

//TODO: CSS needs work

export default function About() {
    return (
        <div>
            <h1 className={classes.heading}>Our Mission</h1>
            <Flex direction={{
                base: 'column',
                md: 'row'
            }}
                  gap={{
                      base: 'sm',
                      md: '4vw'
                  }}
                  align={{
                      base: 'center',
                      md: 'flex-start'
                  }}
                  justify={"center"} wrap={"wrap"}>
                <Image className={classes.img}
                       radius="xl"
                        src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg"
                        alt="Monkey 1"/>
                <Text className={classes.paragraph}>
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
                </Text>
            </Flex>
        </div>
    );
}
