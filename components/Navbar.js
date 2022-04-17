import { Box, Button, Center, Flex, Input, Spacer, Text, useColorMode, useDisclosure, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { FaRegUserCircle } from "react-icons/fa";
import { useGetAccessTokenMutation, useLogoutUserMutation } from '../pages/auth/authApi';
import store from '../app/store';
import {logout, setUser} from "../pages/auth/authSlice"
import { useSelector } from 'react-redux';
import { useGetUserMutation } from '../pages/user/userAPI';

const Navbar = ()=>{
    const [logoutUser] = useLogoutUserMutation()
    const [getNewAccessToken] = useGetAccessTokenMutation()
    const [getUser]  = useGetUserMutation()
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = useSelector(state => state.auth)
    const router = useRouter()
    const btnRef = React.useRef()

    const handleClick = (e, path) => {
        e.preventDefault()
        if(isOpen)onClose();
        router.push(path)
    };

    const handleLogout = async()=>{
        try{
            const refreshToken = Cookies.get("refreshToken")
            await logoutUser(refreshToken).unwrap()
            store.dispatch(logout())
            router.push("/")
        }
        catch(error){
            console.log(error)
        }
    }
    const handleIsLoggedIn = async() => {                  
        if(typeof window !== "undefined"){
            const refreshToken = Cookies.get("refreshToken")
            const accessToken = Cookies.get("accessToken")
            if(!refreshToken){
                store.dispatch(logout())
                if(router.asPath != '/auth/signup' && router.asPath != '/auth/login')router.push("/",undefined, { shallow: true })
                return
            }
            if(refreshToken){   // - sets a new acc token if expired in interceptor - used to get the user's info
               const user = await getUser().unwrap()   
               console.log(user)
               store.dispatch(setUser({isLoggedIn:true, userId: user?.user?.id, email: user?.user?.email }))
            }
            if(router.asPath == '/auth/signup' || router.asPath == '/auth/login')router.push("/",undefined, { shallow: true })
        }
    }
    useEffect(()=>{
        typeof window !== 'undefined' && handleIsLoggedIn()
    },[])
    return(
    <>
    <Flex zIndex={20} bg="transparent" h="60px" w="100%" pos={"fixed"} display={["none","none","flex","flex"]} px="4" py="2" alignItems="center">
        <Box >
            <Link href="/">
            <Text>Project Name</Text>
            </Link>
        </Box>
        <Spacer/>
        <Center >
            <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}
            </Button>
        </Center>
        {user.isLoggedIn ? <Menu>
            <MenuButton as={Button} color='brand.800' ml="4" leftIcon={<FaRegUserCircle/>}>
                Profile
            </MenuButton>
            <MenuList>
                <MenuItem onClick={handleLogout} >Logout</MenuItem>
                <MenuItem onClick={()=>router.push("/user")} >Profile</MenuItem>
            </MenuList>
        </Menu> :
        <>
            <Box ml="4">
                <Link href="/auth/signup">
                <Text>Sign Up</Text>
                </Link>
            </Box>
            <Box ml="4">
                <Link href="/auth/login">
                <Text>Sign In</Text>
                </Link>
            </Box>
        </>
        }
    </Flex>
    <Flex  bg="transparent" direction="row" h="60px" w="100%" pos={"fixed"} display={["flex","flex","none","none"]}>
        <Box p='2' w="20%">
            <Button ref={btnRef} onClick={onOpen} > 
                <HiMenu/>
            </Button>
        </Box>
        <Center p='4'  w="65%" >
            <Link href="/">
                <Text fontSize='lg'>Project Name</Text>
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