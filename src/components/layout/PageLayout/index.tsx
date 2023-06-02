import { Stack } from "@chakra-ui/react";
import React from "react";
import NavigationBar from "./navigation-bar";

interface IPageLayoutProps {
  navItems?: {
    icon: React.ReactNode
    onIconClick: () => void
  }[]
  children: React.ReactNode
}

const PageLayout = ({
  navItems,
  children
}: IPageLayoutProps) => {
  return (
    <Stack
      w='100%'
      flexDirection='column'
    >
      <NavigationBar navItems={navItems} />
      <Stack w='100%'>
        {children}
      </Stack>
    </Stack>
  )
}
export default PageLayout
