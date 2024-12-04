import {Text, Title} from '@mantine/core';
import classes from './Welcome.module.css';

export default function Welcome() {
    return (
        <div className={classes.welcomeDiv}>
            <Title className={classes.title} ta="center" mt={100}>
                Welcome to{' '}
                <Text
                    inherit variant="gradient" component="span"
                    lightHidden
                    gradient={{
                        from: 'var(--mantine-primary-color-filled)',
                        to: 'var(--mantine-color-dark-0)'
                    }}>
                    CQBS
                </Text>
                <Text
                    inherit variant="gradient" component="span"
                    darkHidden
                    gradient={{
                        from: 'var(--mantine-primary-color-filled)',
                        to: 'var(--mantine-color-dark-7)'
                    }}>
                    CQBS
                </Text>
            </Title>
            <Text color="dimmed" ta="center" size="lg" maw={"80%"} mx="auto"
                  mt="xl">
                The premier business group for LGBT undergraduates at Columbia
                University.
                <br/>
                We strive to de-stigmatize being “out” in the industry.
            </Text>
        </div>
    );
}
