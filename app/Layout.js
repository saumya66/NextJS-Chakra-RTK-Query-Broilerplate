import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar';

const Layout = ({children})=>{
    return(
        <Box h="100%" w='100%' >
            <Navbar/>
            {children}
        </Box>
        )
}

export default Layout