import { Heading, VStack,Flex } from "@chakra-ui/layout";
import{ useColorMode } from "@chakra-ui/color-mode";
import { IconButton, Spacer, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
   
    <VStack p={5}>
      <Flex w="100%">
        <Heading
        ml="8" size="md" fontWeight='semibold' color="cyan.400">Portfolio</Heading>
        <Spacer></Spacer>
        <IconButton as={Link} href="https://www.linkedin.com/in/jayakumar-s-610669217" ml={2} icon={<FaLinkedin/>} isRound='true'> </IconButton>
        <IconButton as={Link} href="https://www.instagram.com/lucifer__mornings_tar/" ml={2} icon={<FaInstagram/>} isRound='true'></IconButton>
        <IconButton as={Link} href="https://github.com/Jayakumar-dev" ml={2} icon={<FaGithub/>} isRound='true' ></IconButton>
       <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound='true' onClick={toggleColorMode}> </IconButton>
       </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
      
    </VStack>
  );
}

export default App;
