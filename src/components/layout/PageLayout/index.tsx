import { Stack } from "@chakra-ui/react";
import React from "react";

interface IPageLayoutProps {
  children: React.ReactNode
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return (
    <Stack>
      {children}
    </Stack>
  )
}
export default PageLayout
