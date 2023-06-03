import React from "react";
import { Stack } from "@chakra-ui/react";
import { UserCircle } from "phosphor-react";

const Avartar = () => {
  return (
    <Stack p='0px' m='0px' justifyContent='center' alignItems='center' width='50px' height='50px'>
      <UserCircle size={30} color="#934670"/>
    </Stack>
  )
}
export default Avartar