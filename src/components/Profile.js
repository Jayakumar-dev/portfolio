import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiDocker, DiJenkins } from 'react-icons/di'
import { FaAws } from 'react-icons/fa';

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Practical Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Specialised in Cloud and DevOps.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon color="white" p="4" as={FaAws} w="24" h="24" />
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                           Solutions Architect
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}>
                        <Icon color="black" p="4" as={DiDocker} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Docker
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "red.400", }}

                    >
                        <Icon as={DiJenkins} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Jenkins
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}


export default Profile
