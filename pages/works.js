import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

export default function works() {
  return (
    <Layout title="Works">
      <Heading as="h3" fontSize={20} mb={4}>
        My github repositories
      </Heading>
    </Layout>
  )
}
