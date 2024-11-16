import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavData } from "./NavData";

interface Props {
  children: React.ReactNode;
  handleScroll: (item: React.ReactNode) => void;
}

interface HeaderProps {
  handleScroll: (item: React.ReactNode) => void;
}

const Links = NavData.map((i) => i.title);

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

function NavigationBar({ handleScroll }: HeaderProps) {
  return (
    <>
      <div className="pl-8 py-8">
        {NavData.map((menu, index) => {
          return (
            <div
              key={index}
              className="mb-4"
              onClick={() => handleScroll(menu.title)}
            >
              <div className="font-extrabold">{menu.title}</div>
              <ul className="list-disc">
                {menu.subMenu.map((submenu, index) => {
                  return (
                    <li className="ml-4 text-sm text-zinc-500">{submenu}</li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NavigationBar;
