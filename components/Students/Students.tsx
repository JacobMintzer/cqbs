import classes from "@/components/Students/Students.module.css";
import { useForm } from '@mantine/form';
import {
    Button,
    Checkbox,
    Fieldset,
    Group,
    TextInput,
    Text,
    Title,
    Flex
} from '@mantine/core';
import { useState } from "react";

export default function Students() {

    const [err, setErr] = useState({
        status: -999,
        message: ""
    });

    const [disabled, setDisabled] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@columbia.edu$/.test(value) ? null :
            "Please enter your @columbia.edu email."),
        },
    });

    const handleSubmit = async (values : Object) => {
        try {
            setDisabled(true);
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
                    setDisabled(true);
                }
                else {
                    setErr({
                        status: response.status,
                        message: JSON.stringify(response.body)
                    });
                }
                console.log(`${response.status} ${response.body}`);
            })
        } catch (e) {
            console.log(e);
            setErr({
                status: 500,
                message: "Internal Error: please try again later"
            });
            setDisabled(false);
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
            >Welcome Prospective Students</Title>
            <Text className={classes.sub} ta={"left"} mb={"md"} maw={"80%"}>
                Welcome! We're thrilled to have you here. Please think of us as a helpful resource – we are happy to delve into what life is like at CQBS or simply chat.
                If you'd like to connect with a current member of CQBS, kindly fill out the form below. We'll reach out to you as soon as possible!
            </Text>
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
                        { handleButton() }
                    </Group>
                </Fieldset>
            </form>
        </Flex>
    );
}
