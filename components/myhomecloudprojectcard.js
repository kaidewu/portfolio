import React from "react"
import {
    HStack,
    VStack,
    Text,
    useColorModeValue,
    Box,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody
} from "@chakra-ui/react"
import Image from "./image"
import { AnimatePresence, motion } from 'framer-motion'
import ModalCard from './myhomecloudcard'

const ProjectCard = ({ title, logo, About }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <>
            <Link 
            onClick={onOpen} 
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
                    bgColor={"rgba(183, 242, 255, 0.8)"}
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

                    <VStack align="start" justify="flex-start" spacing={1}>
                        <VStack spacing={0} align="start">
                            <HStack>
                                <Text fontWeight="bold" fontSize="md" noOfLines={2} color={useColorModeValue("black", "white")}>
                                    {title}
                                </Text>
                            </HStack>

                            <Text
                            fontSize="sm"
                            color={useColorModeValue("gray", "gray")}
                            >
                            {About}
                            </Text>
                        </VStack>
                    </VStack>
                </HStack>
            </Link>

            <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.3 }}>
                    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader align="center">{title}</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <ModalCard />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </motion.div>
            </AnimatePresence>
        </>
    )
};

export default ProjectCard;