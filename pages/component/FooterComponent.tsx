import { Flex, SimpleGrid, Box, Button, Center, Image, Text } from "@chakra-ui/react";

function FooterComponent(){
    return (
        <Flex mt='5rem' direction='column' height='300px' width='100%' backgroundColor='#101010'>
            <Center w='100%'>
                <SimpleGrid mt='5rem' gap='45px' columns={3}>
                    <Box>
                        <Button colorScheme='teal' variant='link'>
                            <Center>
                                <Image width={8} height={8} alt='alt' src='/github.svg'></Image>

                            
                            </Center>
                        </Button>
                    </Box>

                    <Box>
                        <Button colorScheme='teal' variant='link'>
                            <Center>
                                <Image width={8} height={8} alt='alt' src='/instagram.svg'></Image>

                            
                            </Center>
                        </Button>
                    </Box>

                    <Box>
                        <Button colorScheme='teal' variant='link'>
                            <Center>
                                <Image width={8} height={8} alt='alt' src='/brand-discord.svg'></Image>
                            </Center>
                        </Button>
                    </Box>
                </SimpleGrid>
            </Center>
            <Center textAlign='center'><Text mt='4' size='lg' width='40%' color='white'>All credits to Next.js. Website made by WhiteClawConeseur AKA VelvetDuck.</Text></Center>
        </Flex>
    );
}

export default FooterComponent;