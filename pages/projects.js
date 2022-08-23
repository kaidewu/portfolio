import { 
  Container, 
  Heading, 
  SimpleGrid, 
  Center, 
  Box 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function projects() {
  return (
    <Layout>
      <Center>
        <Box>
          <Box flexGrow={1}>
            <Heading fontSize={"40px"} variant="page-title">
              Welcome to Kaide's Portfolio
            </Heading>
          </Box>
        </Box>
      </Center>
    </Layout>
  )
}
