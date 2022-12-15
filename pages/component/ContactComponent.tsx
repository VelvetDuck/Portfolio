import {
    FormControl,
    FormErrorMessage,
    FormHelperText,
    Heading,
    Input,
    FormLabel,
    RadioGroup,
    Radio,
    HStack,
    Flex,
    Center,
    Button


  } from '@chakra-ui/react'

import { useState } from 'react'


function ContactComponent(){
    const [input, setInput] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {setInput(e.target.value)}
    const isError = input === ''

    var option: string;
    var emailAddr : string;
    var firstName : string;
    

    return (
        <Center>
            <Flex id='contact' direction='column' w='80%' my='20' backgroundColor='#101010' borderRadius='8px'>
                <FormControl padding="10">
                    <Heading as='h2'>Contact with us!</Heading>
                        <FormLabel>Email address</FormLabel>
                        <Input onChange={
                            (value) => {
                                emailAddr = value.target.value;
                            }
                        } type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                        {!isError ? (
                            <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}

                        <FormLabel>First name</FormLabel>
                        <Input onChange={
                            (value) => {
                                firstName = value.target.value;
                            }}
                            
                            type='text'/>
                        <FormHelperText>We will keep your first name private.</FormHelperText>

                        <FormLabel as='legend'>Type of contact cause.</FormLabel>
                        <RadioGroup defaultValue='Business'>
                            <HStack spacing='24px'>
                            <Radio onChange={(value) => {
                                option = value.target.value;
                            }} value='Business'>Business</Radio>
                            <Radio onChange={(value) => {
                                option = value.target.value;
                            }} value='Meeting'>Meeting</Radio>
                            <Radio onChange={(value) => {
                                option = value.target.value;
                            }} value='Other'>Other</Radio>
                            </HStack>
                        </RadioGroup>

                        <Button
                            mt={4}
                            colorScheme='teal'
                            type='submit'
                            onClick={() => {
                                var optionFor : string = option;
                                var email : string = emailAddr;
                                var name : string = firstName;


                                let context : string = `Hey, I want to ask you about: ${optionFor}. My email is: ${email}. Please respond to me.`;
                                let contextTitle : string = `Generated email from portfolio website: Firstname: ${name}`;


                                window.location.href = 'mailto:' + email + '?subject=' + contextTitle + '&body=' + context;
                            }}
                        >
                            Submit
                        </Button>
                </FormControl>
            </Flex>
        </Center>
    );
}

export default ContactComponent;