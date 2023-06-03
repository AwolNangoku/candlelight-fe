import { Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import loginLogo from '../../assets/login-logo.png'
import { SigninForm } from "../../components/forms";

const Login = () => {
  return (
    <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
      <Stack w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
        <Image
          w="36px"
          h="88px"
          src={loginLogo}
          fallbackSrc="https://via.placeholder.com/50"
          _hover={{ cursor: 'pointer' }}
        />
      </Stack>

      <Stack p={5} />

      <Stack w='100%'>
        <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
          <Text
            color='#000000'
            fontWeight={700}
            fontSize='24px'
            lineHeight='32px'
            m={0}
          >
            Sign in
          </Text>
          <Text
            color='#667085'
            fontWeight={400}
            fontSize='16px'
            lineHeight='24px'
            m={0}
          >
            Please enter details below:
          </Text>
        </Stack>
      </Stack>

      <SigninForm />
    </Stack>
  )
}
export default Login