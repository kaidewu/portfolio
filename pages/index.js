import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { 
  IconButton,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
  Heading,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Welcome
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        </Box>
      </Box>
    </Layout>
  )
}

export { getServerSideProps } from '../components/chakra'