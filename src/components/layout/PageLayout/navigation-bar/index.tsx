import { HStack, Image, Stack } from "@chakra-ui/react"
import React from "react"
import Avartar from "./avatar"
import logo from '../../../../assets/logo.png'

type NavItem = {
  icon: React.ReactNode,
  onIconClick: () => void
}

interface INavigationBarProps {
  navItems?: NavItem[]
}

const NavigationBar = ({ navItems }: INavigationBarProps) => {
  return (
    <Stack
      w='100%'
      bg='#EDD7AE'
    >
      <HStack
        w='100%'
      >
        <Stack w='80%' justifyContent='flex-start' alignItems='flex-start' p='10px'>
          <Image
            w="30px"
            h="30px"
            src={logo}
            fallbackSrc="https://via.placeholder.com/50"
            _hover={{ cursor: 'pointer' }}
          />
        </Stack>

        <HStack
          w='20%'
          justifyContent='flex-end'
          alignItems='flex-end'
        >
          {(navItems || []).map((navItem: NavItem, index: number) => (
            <Stack role="button" key={index}>
              {navItem.icon}
            </Stack>
          ))}
        </HStack>
        <Avartar />
      </HStack>
    </Stack>
  )
}
export default NavigationBar
