import {
    Button,
    Text,
    Title,
    Flex, Anchor, CopyButton
} from '@mantine/core';
import classes from "./Contact.module.css";
import {useEmail} from "@/components/useEmail/useEmail";

export default function Contact() {

    //const { e, isLoading, isError } = useEmail();

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    //if (isLoading || isError) return <div></div>;

    const e = {e: String(process.env.NEXT_PUBLIC_EMAIL_ENCODED)};

    return(
        <Flex direction={"column"} justify={"center"} align={"center"} className={classes.topDiv}>
            <Title ta={"center"} mb={"md"} maw={"80%"}>
                Contact Us
            </Title>
            <Text ta={"left"} mb={"md"} maw={"80%"}>
                If you would like to contact CQBS about anything, please
                contact:
                <br/>
                <br/>
                <Anchor
                    onClick={() => openInNewTab(
                    `mailto:${atob(e.e)}`)}
                    underline="always"
                >
                    Enzo Kim
                </Anchor>
                <CopyButton value={atob(e.e)}>
                    {({ copied, copy }) => (
                        <Button color={copied ? 'teal' : 'pink'} onClick={copy} size={"xs"} ml={"xs"}>
                            {copied ? 'Copied email!' : 'Copy email'}
                        </Button>
                    )}
                </CopyButton>
                <br/>
                <br/>
                We welcome all inquiries regarding Alumni Relations,
                Sponsorship, Recruiting, External Media, and other LGBTQ
                organizations from both Columbia and the wider community!
            </Text>
        </Flex>
    );
}
