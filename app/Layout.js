import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Link from 'next/link'
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie"
import store from './store';
import { logout } from '../pages/auth/authSlice';
import { useRouter } from 'next/router';
import {useGetAccessTokenMutation} from "../pages/auth/authAPI"

const Layout = ({children})=>{
    const router = useRouter()
    const [getAccessToken] = useGetAccessTokenMutation()
    // const handleGetAccessToken = async(refreshToken)=>{
    //     try{
    //     const accessToken = await getAccessToken(refreshToken).unwrap();
    //     const date = new Date();
    //     let accessTokenExpireDate=  new Date(date.getTime() +(60*1000));
    //     Cookies.set("accessToken", accessToken?.accessToken, {expires: accessTokenExpireDate})
    //     console.log("accessToken",accessToken)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // useEffect(() =>{
    //     if(typeof window !== 'undefined'){
    //         const refreshToken = Cookies.get("refreshToken")
    //         const accessToken = Cookies.get("accessToken") 
    //         if(accessToken && refreshToken)return
    //         if(!refreshToken){
    //             store.dispatch(logout())
    //             router.push("/auth/login")
    //         }
    //         if(refreshToken){
    //             // console.log(refreshToken)
    //             handleGetAccessToken(refreshToken); 
    //         }
    //    } 
    // },[])
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