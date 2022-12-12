import { Flex, Text } from "@chakra-ui/react";
import Image from 'next/image'

export default function AboutComponent(){
    return (
        <Flex my='10rem' mx='auto' direction='column' borderRadius='8px' bg='#101010' w={{
            base: '300px',
            sm: '350px',
            md: '400px',
            lg: '700px'
        }} h='30rem' alignItems={{
            base: 'center',
            sm: 'center'
        }}>
            <Image width={150} height={150} style={{
                borderRadius: '50%',
                marginTop: '30px'
            }}alt='alt' src='/userAvatar.jpg'></Image>
            <Text fontSize={{
                base: '15px',
                sm: '20px',
                md: '30px'
            }} px='5' my='10' as='h2' color='white' textAlign='center'>Hello!</Text>
            <Text w='80%' color='white' my='auto'
            fontSize={{
                base: '12px',
                sm: '15px',
                md: '17px',
                lg: '20px'
            }}
            >This is my Portfolio website that shows all my knowledge.</Text>
        </Flex>
    );
}
