import { Button, Center, Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.auth)

  return (
    <Center pt="60px" minW="100vw" minH="100vh">
        <Text fontSize="30px" fontWeight="bold">Welcome to Home Authenticated User: {user?.email?.split('@')[0]}</Text>
    </Center>
  )
}

export default App;