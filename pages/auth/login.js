import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import { Field, Formik } from "formik";
import { signUpSchema } from '../../app/validations';
import { useLoginUserMutation } from './authApi';
import toast from "../../components/Toast";
import { useRouter } from 'next/router';

const Login = ()=>{
    const router = useRouter()
    const [login] = useLoginUserMutation()
    const notify = (type, message) => {
        toast({ type, message });
    }
    const [loginError, setLoginError] =  useState()

    const handleLogin = async(values,actions)=>{
        try{
            console.log(values)
            await login(values).unwrap()
            // console.log(userInfo)
            notify("success","Logged In");
            router
        }
        catch(err){
            console.log(err?.data?.message)
            setSignUpError("Invalid email or password.")
            notify("error", "Invalid Credentials !")
        }
        actions.setSubmitting(false);
    }
    return(
        <Box 
        minH="100vh" minW="100vw" pt="60px" display="flex" alignItems="center" justifyContent="center">
        <Flex direction="column" w={["92vw", "68vw" , "48vw","36vw"]} borderRadius="10" h="600px" bg="white" boxShadow='xl' p="8">
            <Text fontSize="30px" color="brand.800" fontWeight="bold" mb={8}>Log In</Text>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={signUpSchema}
              onSubmit={handleLogin}
            > 
            {({handleSubmit, handleBlur, errors,touched,values,handleChange,isSubmitting}) => (
            <form>
                <TextInput onChange={handleChange('email')} name='email' hand value={values.email} label='Email' placeholder="Enter email" error={errors.email}/>
                <TextInput onBlur={handleBlur('password')} onChange={handleChange('password')} name='password' value={values.password} label='Password' placeholder="Enter password" error={errors.password}/>
                <Button 
                    isLoading={isSubmitting}
                    my={8}
                    bgColor="brand.800"
                    color="white" 
                    w="100%"
                    isDisabled={isSubmitting} 
                    onClick={handleSubmit}
                >Log In</Button>
            </form>
            )}
        </Formik>
        </Flex>
    </Box>
    )
}

export default Login;