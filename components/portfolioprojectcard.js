import React from "react"
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Heading
} from "@chakra-ui/react"
import Image from "./image"

const ProjectCard = ({ title, logo, Description, url }) => {
    return (
        <>
            <Link 
            href={url} 
            textDecoration={"none"}>
                <HStack
                    p={4}
                    bg={useColorModeValue("white", "neutralD.100")}
                    rounded="lg"
                    borderWidth="1px"
                    borderColor={useColorModeValue("neutral.400", "neutralD.400")}
                    w="100%"
                    h="100%"
                    textAlign="left"
                    align="start"
                    spacing={4}
                    transition="all 0.25s"
                    transition-timing-function="spring(1 100 10 10)"
                    _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
                >
                    <Box
                    rounded="lg"
                    p={2}
                    position="relative"
                    overflow="hidden"
                    lineHeight={0}
                    boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
                    bgColor={"rgba(255, 250, 185, 0.8)"}
                    >
                    <Box
                        position="absolute"
                        top={0}
                        bottom={0}
                        left={0}
                        right={0}
                        opacity={0.25}
                    ></Box>
                    <Image
                        src={logo}
                        height={40}
                        width={40}
                        layout="fixed"
                        rounded="md"
                    ></Image>
                    </Box>

                    <VStack align="start" justify="flex-start" spacing={1} textDecoration={"none"}>
                        <VStack spacing={0} align="start">
                            <HStack>
                                <Text fontWeight={"bold"} fontSize="md" color={useColorModeValue("black", "white")}>
                                    {title}
                                </Text>
                            </HStack>

                            <Text
                            fontSize="sm"
                            color={useColorModeValue("gray", "gray")}
                            >
                            {Description}
                            </Text>
                        </VStack>
                    </VStack>
                </HStack>
            </Link>
        </>
    )
};

export default ProjectCard;