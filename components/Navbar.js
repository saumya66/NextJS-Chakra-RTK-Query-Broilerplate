import { Box, Button, Center, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"

const Navbar = ()=>{
    const { colorMode, toggleColorMode } = useColorMode()

    return(
    <Flex bg="transparent" h="60px" w="100%" pos={"fixed"} >
        <Box p='4'>
            <Link href="/">
            <Text>LearnVerse</Text>
            </Link>
        </Box>
        <Spacer/>
        <Center >
            <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
            </Button>
        </Center>
        <Box p='4'>
            <Link href="/auth/signup">
            <Text>Sign Up</Text>
            </Link>
        </Box>
        <Box p='4'>
            <Link href="/auth/login">
            <Text>SignIn</Text>
            </Link>
        </Box>
    </Flex>
    )
}

export default Navbar