import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, Link, Stack, Text } from '@chakra-ui/react'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import React from 'react'

interface SigninFormData {
  email: string,
  password: string
}

const SigninFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('An email address is required'),
  password: Yup.string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
})

const SigninForm: React.FC = () => {
  const signIn = async (values: SigninFormData, {
    setSubmitting
  }: FormikHelpers<SigninFormData>) => {
    try {
      setSubmitting(true)
      console.log('Signing user...', values)
      // eslint-disable-next-line
    } catch (error: any) {
      console.log(error)
    }
  }

  const initialFormValues = {
    email: '',
    password: ''
  }

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={signIn}
      validationSchema={SigninFormValidation}
    >
      {
        ({
          isSubmitting,
          errors
        }) => {
          return (
            <Form>
              <Stack w="100%" justifyContent='center' align='center'>
                <Stack p={2} />
                <Stack w='100%'>
                  <Field w='100%' name='email'>
                    {
                      // eslint-disable-next-line
                      ({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.email && form.touched.email} 
                          isRequired
                        >
                          <FormLabel
                            htmlFor='email'
                            fontWeight={500}
                            fontSize="14px"
                            lineHeight="20px"
                          >
                            Email
                          </FormLabel>
                          <Input
                            type='email'
                            {...field}
                            w='100%'
                            h='44px'
                            borderRadius='8px'
                            id='email'
                            borderBottom={`2px #8AAAD9 solid`}
                            placeholder='Enter email'
                          />
                          {errors.email ? (
                            <FormErrorMessage>{errors.email}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )
                    }
                  </Field>
                </Stack>

                <Stack p={5} />
                <Stack w="100%">
                  <Field w='100%' name='password'>
                    {
                      // eslint-disable-next-line
                      ({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.password && form.touched.password} 
                          isRequired
                        >
                          <FormLabel
                            htmlFor='password'
                            fontWeight={500}
                            fontSize="14px"
                            lineHeight="20px"
                          >
                            Password
                          </FormLabel>
                          <Input
                            type='password'
                            {...field}
                            id='password'
                            w='100%'
                            h='44px'
                            borderRadius='8px'
                            borderBottom='2px #8AAAD9 solid'
                            placeholder='********************************'
                          />
                          {errors.password ? (
                            <FormErrorMessage>{errors.password}</FormErrorMessage>
                          ) : null}
                        </FormControl>
                      )
                    }
                  </Field>
                </Stack>

                <Stack p={15} />
                <Stack w='100%' justifyContent="center" align="center">
                  <Box w='360px'>
                    <Button
                      color='white'
                      bg='#934670'
                      fontWeight={700}
                      fontSize="16px"
                      lineHeight="24px"
                      w="100%"
                      h='40px'
                      borderRadius='8px'
                      isDisabled={isSubmitting || Object.values(errors).length > 0}
                      isLoading={isSubmitting}
                      type="submit"
                      loadingText="Signing in..."
                    >
                      Sign in
                    </Button>
                  </Box>

                  <HStack
                    w="100%"
                    align="center"
                    justifyContent="center"
                  >
                    <Link
                      key="forgot-password"
                      href={"/forgot-password"}
                    >
                      <Text
                        fontWeight={500}
                        fontSize="14px"
                        lineHeight="18px"
                      >
                        Forgot password
                      </Text>
                    </Link>
                  </HStack>

                  <HStack
                    w="100%"
                    align="center"
                    justifyContent="center"
                  >
                    <Text
                      fontWeight={500}
                      fontSize="14px"
                      lineHeight="18px"
                    >
                      Don&apos;t have an account?
                    </Text>
                    <Link
                      key="signup"
                      _hover={{ color: 'gray.700' }}
                    >
                      <Text fontWeight={600} fontSize="12px" lineHeight="20px">Sign up</Text>
                    </Link>
                  </HStack>
                </Stack>
              </Stack>
            </Form>
          )
        }
      }
    </Formik>
  )
}
export default SigninForm
