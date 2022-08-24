import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Menu, MenuButton, Button, Avatar } from '@chakra-ui/react'
import styled from '@emotion/styled'
import AvatarLogo from '../public/images/dogo-avatar.svg'

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
              <Avatar
                name='Dogo Logo'
                size='md'
                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih1.redbubble.net%2Fimage.613726245.4139%2Ffposter%2Csmall%2Cwall_texture%2Cproduct%2C750x1000.u7.jpg&f=1&nofb=1'
              />{' '}
          </MenuButton>
        </Menu>
      </a>
    </Link>
  )
}

export default Logo
