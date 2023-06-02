import React from "react";
import { Image, Stack } from "@chakra-ui/react";

const Avartar = () => {
  return (
    <Stack p='0px' m='0px' justifyContent='center' alignItems='center' width='50px' height='50px'>
      <Image
        w="30px"
        h="30px"
        fallbackSrc="https://via.placeholder.com/50"
        _hover={{ cursor: 'pointer' }}
      />
    </Stack>
  )
}
export default Avartar