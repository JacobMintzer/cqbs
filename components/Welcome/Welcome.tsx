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
        If you are a member reading this, please tell your president to send deets :(
          <br />
          anyways always blame the president
      </Text>
    </div>
  );
}
