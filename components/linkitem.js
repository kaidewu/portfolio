import {
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <NextLink href={href} passHref scroll={false}>
        <Link
          p={2}
          bg={active ? 'black' : undefined}
          color={active ? 'white' : inactiveColor}
          target={target}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    )
}

export default LinkItem