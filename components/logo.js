import Link from 'next/link'
import Image from 'next/image'
import { 
  Text, 
  useColorModeValue, 
  Menu, 
  MenuButton, 
  Button, 
  chakra 
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
      <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}>
              <ProfileImage
              src="/images/dogo-avatar.jpg"
              alt="Dogo Avatar"
              borderRadius="full"
              width="40%"
              height="40%"
            />{' '}
          </MenuButton>
        </Menu>
      </a>
    </Link>
  )
}

export default Logo
