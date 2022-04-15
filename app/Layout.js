import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Layout = ({children})=>{
    return(
        <Box h="100%" w='100%' >
            <Navbar/>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
            />
            {children}
        </Box>
        )
}

export default Layout