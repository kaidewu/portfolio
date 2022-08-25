import Logo from './logo'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Button,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import LinkItem from './linkitem'
import { IoLogoGithub } from 'react-icons/io5'
import Paragraph from './paragraph'

const Navbar = props => {
  const { path } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'none', md: 'none' }}
          alignItems="center"
          marginLeft={"30%"}
          fontSize={"17px"}
          fontWeight={"bold"}
        >
          <Button onClick={onOpen} path={path} fontWeight={"bold"} fontSize={"17px"}>
            Projects
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              <ModalBody>
                <Paragraph>Working...</Paragraph>
              </ModalBody>
            </ModalContent>
          </Modal>

          <LinkItem 
          href="https://github.com/kaidewu/portfolio" 
          path={path}
          target="_blank"
          display="inline-flex"
          alignItems="center">
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu" >
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem
                  as={Link}
                  href="https://github.com/kaidewu/portfolio"
                >
                  <IoLogoGithub />
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar