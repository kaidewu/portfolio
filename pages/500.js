import Link from "next/link";
import { NextSeo } from "next-seo";
import {
    Center,
    Heading,
    VStack,
    Container,
    Divider,
    Box,
    Button
} from "@chakra-ui/react";
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

export default function NotFound() {
    return (
      <Container>
        <Center>
          <NextSeo
            title="500 – Kaide Wu"
            canonical="https://kaidewu.vercel.com/500"
            openGraph={{
              url: "https://kaidewu.vercel.com/500",
              title: "500 – Kaide Wu",
            }}
          />
          <VStack>
            <Heading fontSize="120px">500</Heading>
            <Paragraph mb={8}>Internal Server Error.</Paragraph>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal" margin={"2em"}>Return to home</Button>
                </NextLink>
            </Box>
          </VStack>
        </Center>
      </Container>
    );
  }