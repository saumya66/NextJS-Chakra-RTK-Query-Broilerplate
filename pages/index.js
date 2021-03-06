 import { Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router"
import App from "./app/index"
import LandingPage from '../components/LandingPage'
export default function Home() {
  const user = useSelector(state => state.auth)
  // const router = useRouter()
  // if(typeof window !== 'undefined'){
  //   if(user.isLoggedIn){
  //     // console.log("isLoggedIn",user.isLoggedIn)
  //     router.push('/app')
  //   }
  // }
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {
          !user.isLoggedIn ? 
          <LandingPage/>:
          <App/>
        }
      </main>

    </div>
  )
}
