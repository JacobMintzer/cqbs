import {
    Button,
    Text,
    Title,
    Flex, Anchor, CopyButton,
} from '@mantine/core';
import classes from './Contact.module.css';

export default function Contact() {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const cqbs_email = String(process.env.NEXT_PUBLIC_CONTACT_EMAIL);

    return (
        <Flex direction="column" justify="center" align="center" className={classes.topDiv}>
            <Title ta="center" mb="md" maw="80%">
                Contact Us
            </Title>
            <Text ta="left" mb="md" maw="80%">
                If you would like to contact CQBS about anything, please
                contact:
                <br />
                <br />
                <Anchor
                    onClick={() => openInNewTab(
                        `mailto:${cqbs_email}`)}
                    underline="always"
                >
                    Enzo Kim
                </Anchor>
                <CopyButton value={cqbs_email}>
                    {({ copied, copy }) => (
                        <Button onClick={copy} size="xs" ml="xs">
                            {copied ? 'Copied email!' : 'Copy email'}
                        </Button>
                    )}
                </CopyButton>
                <br />
                <br />
                We welcome all inquiries regarding Alumni Relations,
                Sponsorship, Recruiting, External Media, and other LGBTQ
                organizations from both Columbia and the wider community!
            </Text>
        </Flex>
    );
}
