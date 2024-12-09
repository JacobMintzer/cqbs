import classes from "@/components/Students/Students.module.css";
import { useForm } from '@mantine/form';
import {
    Button,
    Fieldset,
    Group,
    TextInput,
    Text,
    Title,
    Flex,
    LoadingOverlay
} from '@mantine/core';
import React, { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import Script from 'next/script'


export default function Students(props : any) {

    const [err, setErr] = useState({
        status: -999,
        message: ""
    });

    const [loadingVisibility, handleLoading] = useDisclosure(false);

    const [disabled, setDisabled] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: ''
        },

        validate: {
            email: (value) => (/^\S+@columbia.edu$/.test(value) ? null :
            "Please enter your @columbia.edu email."),
        },
    });


    const handleButton = ()=> {
        if (err.status === -999)
            return(<Button type="submit">Submit</Button>);
        else if (err.status === 200)
            return (
                <>
                    <Text c={"blue"}>Your response has been submitted!</Text>
                    <Button type="submit">Submitted!</Button>
                </>
            );
        else
            return (
                <>
                    <Text c={"red"}>Hmm... It is not working as intended. Try Again?</Text>
                    <Button color={"red"} type="submit">Send Again</Button>
                </>
            );
    }

    return (
        <Flex direction={"column"} justify={"center"} align={"center"}
              className={classes.topDiv}>
            <Title order={1} ta={"center"}
                   mb={"md"} maw={"80%"}
            >
                {props.title}
            </Title>
            <Text className={classes.sub} ta={"left"} mb={"md"} maw={"80%"}>
                {props.subtitle}
            </Text>
            <Flex pos={"relative"} w={"80%"} justify={"center"}>
                <LoadingOverlay visible={loadingVisibility} zIndex={1000}
                                overlayProps={{
                                    radius: "sm",
                                    blur: 2
                                }}/>
                <form
                    onSubmit={form.onSubmit((values) => {
                        setDisabled(true);
                        handleLoading.open();
                        // @ts-ignore
                        window.Pageclip.send("pr6JvYjb8ZXZsPTrnNr5ILRd99xjMu4d", "newStudent", values, (error, pgClipRes) => {

                            if(error) {
                                setErr({
                                    status: 500,
                                    message: "Internal Error: please try again later"
                                })
                                setDisabled(false);
                            } else if (pgClipRes.data !== "ok") {
                                setErr({
                                    status: 400,
                                    message: "Error submitting"
                                })
                                setDisabled(false);
                            } else {
                                setErr({
                                    status: 200,
                                    message: "Your response has been successfully saved!"
                                })
                            }
                        });
                        handleLoading.close();
                    })}
                    className={classes.form}>
                    <Fieldset disabled={disabled} variant={"unstyled"}>
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@columbia.edu"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                            name="email"
                        />
                        <Group justify="flex-end" mt="md">
                            {handleButton()}
                        </Group>
                    </Fieldset>
                </form>
            </Flex>
            <Script src="https://s.pageclip.co/v1/pageclip.js" strategy="beforeInteractive" />
        </Flex>
    );
}
