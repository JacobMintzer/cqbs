import classes from "@/components/Students/Students.module.css";
import { useForm } from '@mantine/form';
import {Button, Checkbox, Fieldset, Group, TextInput, Text} from '@mantine/core';
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
        <div>
            <h1 className={classes.head}>Prospective Students</h1>
            <p className={classes.sub}>Fill out the interest form!</p>
            <div className={classes.formDiv}>
                <form
                    onSubmit={form.onSubmit((values) => {
                        handleSubmit(values);
                    })}>
                    <Fieldset disabled={disabled} variant={"unstyled"}>
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@columbia.edu"
                            key={form.key('email')}
                            {...form.getInputProps('email')}
                        />

                        <Checkbox
                            mt="md"
                            label="I agree to sell my privacy"
                            key={form.key('termsOfService')}
                            {...form.getInputProps('termsOfService', {type: 'checkbox'})}
                        />

                        <Group justify="flex-end" mt="md">
                            {handleButton()}
                        </Group>
                    </Fieldset>
                </form>
            </div>
        </div>
    );
}
