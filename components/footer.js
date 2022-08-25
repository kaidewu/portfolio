import React from 'react'
import { 
  HStack,
  Button,
  useColorModeValue,
  IconButton,
  Icon,
  Text
} from '@chakra-ui/react'
import {
  GithubLogo,
  LinkedinLogo,
  DiscordLogo
} from "phosphor-react"
import NextLink from "next/link"
import Container from "../components/container"
import LinkItem from './linkitem'
import { useRouter } from 'next/router'

const Footer = () => {

  function FooterLink(props) {
    const { href, name, ...rest } = props
    const router = useRouter()
    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
          onClick={() => router.push('mailto:kaidewu@proton.me')}
        >
          {name}
        </Button>
      </NextLink>
    )
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <FooterLink href="mailto:kaidewu@proton.me" name="Contact" />
        <HStack spacing={4}>
          <LinkItem
            href="https://www.linkedin.com/in/kaidewu/"
            isExternal
            unstyled
          >
            <IconButton
              size="sm"
              icon={<LinkedinLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </LinkItem>
          <LinkItem href="https://github.com/kaidewu" isExternal unstyled>
            <IconButton
              size="sm"
              icon={<GithubLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </LinkItem>
          <LinkItem
            href="https://www.discord.com/users/ed1ak#9676"
            unstyled
            isExternal
          >
            <IconButton
              size="sm"
              icon={<DiscordLogo weight="fill" />}
              color={useColorModeValue("neutral.800", "neutralD.1000")}
            ></IconButton>
          </LinkItem>
        </HStack>
        <Text 
        opacity={0.4} 
        fontSize="md">
          &copy; {new Date().getFullYear()} Kaide Wu.
        </Text>
      </HStack>
    </Container>
  )
}

export default Footer