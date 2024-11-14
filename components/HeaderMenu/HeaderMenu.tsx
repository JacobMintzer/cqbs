import {
    Menu,
    Group,
    Center,
    Burger,
    Container,
    useMantineColorScheme,
    Text,
    useComputedColorScheme
} from '@mantine/core';
import {useDisclosure, useElementSize} from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';
import { useRouter } from 'next/router'
import { Image } from '@mantine/core';
import {
    ColorSchemeToggle
} from "@/components/ColorSchemeToggle/ColorSchemeToggle";
const links = [
    {
        link: '#1',
        label: 'About',
        links: [
            { link: '/about', label: 'Mission' },
            { link: '/about/team', label: 'Team' },
        ],
    },
    { link: '/students', label: 'Prospective Students' },
    { link: '/contact', label: 'Contact Us' },
];

//TODO: mobile header menu needs to be made.

export default function HeaderMenu() {
    const [opened, { toggle }] = useDisclosure(false);

    const router = useRouter();
    const { setColorScheme } = useMantineColorScheme();

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item
                key={item.link}
                onClick={() => router.push(item.link).catch((error) => console.log(error))}
            >{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                    <Menu.Target>
                        <a
                          href={link.link}
                          className={classes.link}
                          onClick={(event) => {
                              event.preventDefault();
                          }}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5} />
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              onClick={(event) => {
                  event.preventDefault();
                    router.push(link.link).catch((error) => {console.log(error)});
              }}
            >
                {link.label}
            </a>
        );
    });

    const itemsMobile = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item
                key={item.link}
                onClick={() => router.push(item.link).catch((error) => console.log(error))}
                className={classes.mobileItem}
            >{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <>
                    <Menu.Label>{link.label}</Menu.Label>
                    <Menu.Divider />
                    {menuItems}
                    <Menu.Divider />
                </>
            );
        }

        return (
            <Menu.Item
                key={link.label}
                onClick={() => {
                    router.push(link.link).catch((error) => {console.log(error)});
                }}
                className={classes.mobileItem}
            >
                {link.label}
            </Menu.Item>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <Image
                        onClick={() => router.push('/').catch((error) => console.log(error))}
                        src={'/cqbsLogo.png'}
                        h={40}
                        className={classes.logo}
                        alt={"darkLogo"}
                        darkHidden
                    />
                    <Image
                        onClick={() => router.push('/').catch((error) => console.log(error))}
                        src={'/cqbsLogoLight.png'}
                        h={40}
                        className={classes.logo}
                        alt={"lightLogo"}
                        lightHidden
                    />
                    <Group gap={5} visibleFrom="sm">
                        {items}
                        <ColorSchemeToggle />
                    </Group>

                    <Menu width={"90%"} offset={30} onClose={toggle} floatingStrategy={'absolute'}>
                        <Menu.Target>
                            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                        </Menu.Target>
                        <Menu.Dropdown>
                            {itemsMobile}
                        </Menu.Dropdown>
                    </Menu>
                </div>
            </Container>
        </header>
    );
}
