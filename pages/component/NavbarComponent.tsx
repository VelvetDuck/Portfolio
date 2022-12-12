import { Link, Box, Flex, Text, Heading, Button, ButtonGroup, Stack } from "@chakra-ui/react"
import NextLink from "next/link"
import { IconButton } from "@chakra-ui/react"
import { InfoIcon, ChatIcon, CheckIcon, HamburgerIcon } from "@chakra-ui/icons"
import React, {useState} from 'react'

class NavItem {
    private text: string;
    private href: string;
    private icon: any;
    private mobile: boolean;

    public getText() : string { return this.text; }
    public getHref() : string { return this.href; }
    public getIcon() : any { return this.icon; }
    public isMobile() : boolean { return this.mobile; }
    
    public build() : any {
        return this.isMobile() ? <NextLink href={this.getHref()} passHref>
           <Button my='5' width='250px'>
            {this.getText()}
           </Button>
        </NextLink> :
        <NextLink href={this.getHref()} passHref>
           <Button>
            {this.getText()}
           </Button>
        </NextLink>
    }

    constructor(text: string, href: string, icon : any, isMobile : boolean){
        this.text = text;
        this.href = href;
        this.icon = icon;
        this.mobile = isMobile;
    }
}

function addNavItems(isMobile : boolean) : any{
    return [
        new NavItem('home', '/home',<></>, isMobile).build(),
        new NavItem('about', '/about',<InfoIcon/>, isMobile).build(),
        new NavItem('contact', '/contact',<ChatIcon/>, isMobile).build(),
        new NavItem('projects', '/projects',<CheckIcon/>, isMobile).build()
    ]
}

function NavbarComponent(){

    const [isMobile, setMobile] = useState<boolean>(false);

    return (
        <Flex alignItems={{
            lg: 'center'
        }} backgroundColor={ isMobile === true ? {
            base: 'black',
            sm: 'black',
            md: 'none',
            lg: 'none'
        } :
        {
            base: 'none',
            sm: 'none',
            md: 'none',
            lg: 'none'
        }}
            minWidth='max-content' height={{
                base: '100%',
                sm: '100%',
                md: '100%',
                lg: '4rem'
            }} gap='2' justify='space-between' direction={{
                base: 'column',
                sm: 'column',
                md: 'column',
                lg: 'row'
            }}
        >

            <Heading display='flex' mx='3' as='h2' justifyContent='space-between'>
                Portfolio

            <IconButton onClick={() => setMobile(!isMobile)} my='1' icon={<HamburgerIcon />} aria-label='show or hide nav for mobiles'  display={{
                base: 'flex',
                sm: 'flex',
                md: 'flex',
                lg: 'none'
            }}>Test</IconButton>    
            </Heading>

            <Flex justify='flex-end' alignItems='center' gap='5' mx='3rem' display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex'
            }} width='90%' height='100%'>
                {addNavItems(false)}
            </Flex>
            {
                isMobile ? 
                <Flex display={{

                }} width='100%' height='100%' direction='column' my='5rem' alignItems='center'>
                    {addNavItems(true)}
                </Flex>
                :  <Flex display={{
                    base: 'flex',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'none'
                }} width='100%' height='100%' direction='column' my='5rem' alignItems='center'>
                {addNavItems(true)}
            </Flex>
            }
        </Flex>
    );
}

export default NavbarComponent;
