import { Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export default function Welcome() {
  return (
    <div className={classes.welcomeDiv}>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'red', to: 'purple' }}>
          CQBS
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={"80%"} mx="auto" mt="xl">
          The premier business group for LGBT undergraduates at Columbia University.
          <br/>
          We strive to de-stigmatize being “out” in the industry.
      </Text>
    </div>
  );
}
