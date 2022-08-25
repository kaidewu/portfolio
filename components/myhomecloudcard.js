import React from "react"
import {
    Box, 
    Image, 
    Badge, 
    Text, 
    Stack, 
    Button, 
    Flex, 
    Spacer, 
    Heading,
    Center,
} 
    from "@chakra-ui/react"
import { IoLogoGithub } from 'react-icons/io5'
import LinkItem from './linkitem'
import Data from '../data/cards.json'
  
const ProjectCard = props => {
    const { path } = props

    return (
        <>  
            <Center>
                <Image src={Data.imageURL} alt={Data.imageAlt} boxSize="400px" />
            </Center>
            <Box p={5}>
                <Stack align="center">
                    <Badge 
                        variant="solid" 
                        colorScheme="blue" 
                        rounded="full" px={2}>
                        MyHomeCloud
                    </Badge>
                </Stack>
                <Stack align="center">
                    <Heading size="lg" fontWeight="normal" my={2} >
                        {Data.About}  
                    </Heading>
                    <Text fontWeight="light">
                        MyHomeCloud is a cloud storage that works in local mode. It written in spanish.
                    </Text>
                </Stack>
                <Flex>
                    <Button 
                        variant="solid" 
                        colorScheme="blue"
                        size="sm"
                        margin="5px">
                        <LinkItem 
                            href={Data.repoURL} 
                            path={path}
                            target="_blank"
                            display="inline-flex"
                            alignItems="center">
                                <IoLogoGithub />
                                Source
                        </LinkItem>
                    </Button>
                    <Spacer />
                    <Button 
                        variant="solid" 
                        colorScheme="blue"
                        size="sm"
                        margin="5px">
                        <LinkItem 
                        href={Data.pdfURL}  
                        path={path}
                        target="_blank"
                        display="inline-flex"
                        alignItems="center">
                            Learn More
                        </LinkItem>
                    </Button>
                </Flex>
            </Box>
        </>
    );
}
  
export default ProjectCard;