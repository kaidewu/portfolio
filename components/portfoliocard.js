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
    Center} 
    from "@chakra-ui/react"
import { IoLogoGithub } from 'react-icons/io5'
import LinkItem from './linkitem'
import Data from '../data/cards.json'
  
const ProjectCard = props => {
    const { path } = props

    return (
        <>  
            <Center>
                <Image src={Data.imageURL} alt={Data.imageAlt} boxSize="300px"/>
            </Center>
            <Box p={5}>
                <Stack align="center">
                    <Badge 
                        variant="solid" 
                        colorScheme="blue" 
                        rounded="full" px={2}>
                        Portfolio
                    </Badge>
                </Stack>
                <Stack align="center">
                    <Heading size="lg" fontWeight="normal" my={2} >
                        {Data.portfolioAbout}  
                    </Heading>
                    <Text fontWeight="light">
                        My portfolio
                    </Text>
                </Stack>
                <Flex>
                    <Spacer />
                    <Button 
                        variant="solid" 
                        colorScheme="blue"
                        size="sm"
                        margin="5px">
                        <LinkItem 
                            href={Data.portfolioRepo} 
                            path={path}
                            target="_blank"
                            display="inline-flex"
                            alignItems="center">
                                <IoLogoGithub />
                                Source
                        </LinkItem>
                    </Button>
                </Flex>
            </Box>
        </>
    );
}
  
export default ProjectCard;