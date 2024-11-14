import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import classes from './ColorSchemeToggle.module.css';
import cx from 'clsx';


export function ColorSchemeToggle() {
    // @ts-ignore
    const { setColorScheme } = useMantineColorScheme();
    // @ts-ignore
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
      <ActionIcon
          onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
      >
          <MdLightMode className={cx(classes.icon, classes.light)} stroke={"1.5"} />
          <MdDarkMode className={cx(classes.icon, classes.dark)} stroke={"1.5"} />
      </ActionIcon>
  );
}
