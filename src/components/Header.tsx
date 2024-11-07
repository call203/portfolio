import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
  handleScroll: (item: React.ReactNode) => void;
}

interface HeaderProps {
  handleScroll: (item: React.ReactNode) => void;
}

const Links = ["About", "Stack", "Company", "Project", "Contact"];

const NavLink = (props: Props) => {
  const { children, handleScroll } = props;
  return (
    <div
      className="font-sans font-semibold px-3 text-sm"
      onClick={() => handleScroll(children)}
    >
      {children}
    </div>
  );
};

function Header({ handleScroll }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="py-1 px-10 mb-7 sticky top-0 bg-white z-50">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <p className="font-oleo font-bold lg:text-3xl text-xl">
              Soyeon Lee
            </p>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} handleScroll={handleScroll}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor="white"
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} handleScroll={handleScroll}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </div>
    </>
  );
}

export default Header;
