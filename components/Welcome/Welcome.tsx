import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <div className={classes.welcomeDiv}>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          CQBS
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={"80%"} mx="auto" mt="xl">
        This webpage is in development due to the club not providing me with details :(
          <br />
          Blame the president.
      </Text>
    </div>
  );
}
