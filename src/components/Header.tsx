import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface Props {
  children: React.ReactNode
}

const Links = ['Projects', 'AboutMe', 'Contact']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <div className="font-sans font-medium px-3">
      <a href="/">{children}</a>
    </div>
  )
}
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="py-3 px-10">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <p className="font-sans font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-orange-400">
              Soyeon Lee
            </p>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor="white"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </div>
    </>
  )
}

export default Header
