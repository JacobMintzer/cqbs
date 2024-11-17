import {
    Button,
    Checkbox,
    Fieldset,
    Group,
    TextInput,
    Text,
    Title,
    Flex, Anchor
} from '@mantine/core';
import classes from "./Contact.module.css";

export default function Contact() {
    return(
        <Flex direction={"column"} justify={"center"} align={"center"} className={classes.topDiv}>
            <Title ta={"center"} mb={"md"} maw={"80%"}>
                Contact Us
            </Title>
            <Text ta={"left"} mb={"md"} maw={"80%"}>
                If you would like to contact CQBS about anything, please
                contact:
                <br/>
                <Anchor href={"mailto:ek3462@columbia.edu"}>
                    Enzo Kim
                </Anchor>
                <br/>
                <br/>
                We welcome all inquiries regarding Alumni Relations,
                Sponsorship, Recruiting, External Media, and other LGBTQ
                organizations from both Columbia and the wider community!
            </Text>
        </Flex>
    );
}
