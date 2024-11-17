import {Anchor, Container, Text} from '@mantine/core';

export default function Footer() {
    return (
        <Container mb={"sm"}>
            <Text size={"xs"} ta={"center"} p={"sm"}>
                {"website made with ❤️ by "}
                <Anchor href="https://github.com/KingMedieval"
                        target="_blank" underline="always"
                        >
                     jiyoo dojun
                </Anchor>
            </Text>
        </Container>
    );
}
