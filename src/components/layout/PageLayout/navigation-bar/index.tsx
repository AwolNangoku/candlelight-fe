import { HStack, Stack, Text } from "@chakra-ui/react"
import React from "react"
import Avartar from "./avatar"

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
        <Stack w='80%'>
          <Text>Site Icon</Text>
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
