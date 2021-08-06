import React from 'react'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Circle,  Stack,Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

function Header ()  {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width;600px)");
    
    
    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" 
            w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
             spacing="200px" p={ isNotSmallerScreen ? "32" : "0"} 
             alignSelf="flex-start">
             <Box mt={isNotSmallerScreen ? "0" :16} align='flex-start'>
                 <Text fontSize="5x1" fontWeight="semibold">Hi, I am </Text>
                 <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >JayaKumar</Text>
                 <Text color={isDark ? "gray.200" : "gray.500"}>- Future Devops Engineer and Cloud Expert.
                 Building Mind in AWS,Docker, etc... 🗣</Text>
             </Box>
             <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/55553176?s=400&u=86d6ea6560d48e0b14165d9094c292376363d4e4&v=4' />
             </Flex>
        </Stack>
    )
}

export default Header
