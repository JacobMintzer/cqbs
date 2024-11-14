import { Anchor, Text } from '@mantine/core';

export default function Footer() {
    return (
        <div>
            <Text size={"sm"} ta={"center"}>
                {"made with ❤️ by "}
                <Anchor href="https://github.com/KingMedieval"
                        target="_blank" underline="always"
                        >
                     jiyoo dojun
                </Anchor>
            </Text>
        </div>
    );
}
