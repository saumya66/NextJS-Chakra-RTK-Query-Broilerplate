import { Box, Button, Center, Flex, Input, Spacer, Text, useColorMode, useDisclosure, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {BsFillMoonStarsFill,BsFillSunFill} from "react-icons/bs"
import { HiMenu } from "react-icons/hi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useRouter } from 'next/router';

const Navbar = ()=>{
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
    const btnRef = React.useRef()

    const handleClick = (e, path) => {
        e.preventDefault()
        if(isOpen)onClose();
        router.push(path)
    };
    return(
    <>
    <Flex zIndex={20} bg="transparent" h="60px" w="100%" pos={"fixed"} display={["none","none","flex","flex"]}>
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
    <Flex  bg="transparent" direction="row" h="60px" w="100%" pos={"fixed"} display={["flex","flex","none","none"]}>
        <Box p='2' w="20%">
            <Button ref={btnRef} onClick={onOpen} > 
                <HiMenu/>
            </Button>
        </Box>
        <Center p='4'  w="65%" >
            <Link href="/">
                <Text fontSize='lg'>LearnVerse</Text>
            </Link>
        </Center>
    </Flex>
    <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={["sm", "md","lg"]}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
             <VStack>
                <Box as='button' p='4' w="100%" onClick={(e)=>handleClick(e,"/auth/signup")}>
                    <Text on fontSize={["18px","20px","28px","36px"]}>Sign Up</Text>
                </Box>
                <Box as='button' p='4' w="100%"  onClick={(e)=>handleClick(e,"/auth/login")}>
                    <Text fontSize={["16px","20px","30px","40px"]}>Sign In</Text>
                </Box>
                <Center >
                    <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
                    </Button>
                </Center>
             </VStack>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    )
}

export default Navbar