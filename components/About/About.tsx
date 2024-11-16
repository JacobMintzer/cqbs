'using client';
import classes from './About.module.css';
import {Flex, Group, Image, Text} from "@mantine/core";

//TODO: CSS needs work

export default function About() {
    return (
        <div>
            <Flex direction={{
                base: 'column',
                md: 'row-reverse'
            }}
                  gap={{
                      base: 'sm',
                      md: '4vw'
                  }}
                  align={{
                      base: 'center',
                      md: 'flex-start'
                  }}
                  justify={"center"}
                  wrap={"wrap"}
            >

                <Flex
                    direction={"column"}
                    align={{
                        base: 'center',
                        md: 'flex-start'
                    }}
                >
                    <Text ta={"center"}
                          className={classes.heading}
                          fw={700}
                    >Our Mission</Text>
                    <Text className={classes.paragraph} mb={"xl"}>
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
                <Image className={classes.img}
                       radius="xl"
                       src="https://img-cf.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/shop/data/goods/1590468591591l0.jpg"
                       alt="Monkey 1"
                />
            </Flex>
        </div>
    );
}
