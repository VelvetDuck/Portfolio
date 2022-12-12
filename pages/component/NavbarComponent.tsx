import { Flex, Text } from "@chakra-ui/react";
import Image from 'next/image'

export default function AboutComponent(){
    return (
        <Flex my='10rem' mx='auto' direction='column' bg='#101010' w={{
            sm: '300px',
            md: '400px',
            lg: '700px'
        }} h='30rem' alignItems={{
            sm: 'center'
        }}>
            <Image width={150} height={150} style={{
                borderRadius: '50%',
                marginTop: '30px'
            }}alt='alt' src='/userAvatar.jpg'></Image>
            <Text fontSize={{
                sm: '20px',
                md: '30px'
            }} px='5' my='10' as='h2' color='white' textAlign='center'>Hello!</Text>
            <Text w='80%' color='white' my='auto'
            fontSize={{
                sm: '15px',
                md: '17px',
                lg: '20px'
            }}
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Natus, totam sint voluptatem est voluptates rem perferendis neque veniam quod iusto esse dolore culpa,
            necessitatibus non quidem vel maxime similique reiciendis?</Text>
        </Flex>
    );
}
