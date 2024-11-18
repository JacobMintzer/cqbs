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
    LoadingOverlay, Box
} from '@mantine/core';
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';

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

    const handleSubmit = async (values : Object) => {
        try {
            setDisabled(true);
            handleLoading.open();
            await fetch('/api/submit', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }).then((response) => {
                if (response.status === 200){
                    setErr({
                        status: response.status,
                        message: "Your response has been successfully saved!"
                    });
                }
                else {
                    setErr({
                        status: response.status,
                        message: JSON.stringify(response.body)
                    });
                    setDisabled(false);
                }
                handleLoading.close();
            })
        } catch (e) {
            setErr({
                status: 500,
                message: "Internal Error: please try again later"
            });
            setDisabled(false);
            handleLoading.close();
        }
    }

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
        <Flex direction={"column"} justify={"center"} align={"center"} className={classes.topDiv}>
            <Title order={1} ta={"center"}
                   mb={"md"} maw={"80%"}
            >
                { props.title }
            </Title>
            <Text className={classes.sub} ta={"left"} mb={"md"} maw={"80%"}>
                { props.subtitle }
            </Text>
            <Flex pos={"relative"} w={"80%"} justify={"center"}>
                <LoadingOverlay visible={loadingVisibility} zIndex={1000}
                                overlayProps={{
                                    radius: "sm",
                                    blur: 2
                                }}/>
                <form
                    onSubmit={form.onSubmit((values) => {
                        handleSubmit(values);
                    })} className={classes.form}>
                    <Fieldset disabled={disabled} variant={"unstyled"}>
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@columbia.edu"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />
                        <Group justify="flex-end" mt="md">
                            {handleButton()}
                        </Group>
                    </Fieldset>
                </form>
            </Flex>
        </Flex>
    );
}
