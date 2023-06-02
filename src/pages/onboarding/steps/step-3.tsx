import React from "react"
import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react"
import { generatePath, useLocation, useNavigate } from "react-router-dom"
import glove from '../../../assets/glove.png'
import glove2 from '../../../assets/glove-2.png'
import guitor from '../../../assets/guitor.png'

const Step3 = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onBack = () => {
    navigate(
      generatePath('/onboarding/:step', { step: '2' }),
      { state: { from: location }}
    )
  }

  return (
    <Stack w='100%'>
      <Stack w='100%' p='10px' flexDirection='column' alignItems='center'>
        <Stack bg='#D9D9D9' w='100%' justifyContent='center' align='center'>
          <Text
            fontWeight={400}
            fontSize='30.2px'
            lineHeight='28.69px'
            color='#000000'
          >
            ADs GO HERE!!!!
          </Text>
        </Stack>

        <Stack p={5} />

        <Stack w='100%' justifyContent='flex-start' alignItems='center'>
          <Stack w='100%'>
            <Text
              fontWeight={400}
              fontSize='24px'
              lineHeight='24px'
              color='#301D2A'
            >
              At what level is your Cooking skills?
            </Text>

            <Text
              fontWeight={400}
              fontSize='14px'
              lineHeight='14px'
              color='#616161'
            >
              Select your skill when it comes to cooking.
            </Text>
          </Stack>
        </Stack>

        <Stack
          w='100%'
          justifyContent='flex-start'
          alignItems='center'
          flexDirection='column'
        >
          <Stack w='100%'>
            <Text
              fontWeight={500}
              fontSize='14px'
              lineHeight='22px'
              color='#272727'
            >
              Tap to add
            </Text>
          </Stack>

          <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='center'>
            <Stack w='100%' flexDirection='column' alignItems='center'>
              {[
                {
                  icon: (
                    <HStack w='100%'>
                      <Image
                        src={glove}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                    </HStack>
                  ),
                  title: 'Beginner'
                },
                {
                  icon: (
                    <HStack w='100%'>
                      <Image
                        src={glove}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                      <Image
                        src={glove2}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                    </HStack>
                  ),
                  title: 'Intermediate'
                },
                {
                  icon: (
                    <HStack w='100%'>
                      <Image
                        src={glove}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                      <Image
                        src={glove2}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                      <Image
                        src={guitor}
                        fallbackSrc="https://via.placeholder.com/50"
                        _hover={{ cursor: 'pointer' }}
                      />
                    </HStack>
                  ),
                  title: 'Advanced'
                },
              ].map((buttonProps: {
                title: string,
                icon: React.ReactNode
              }) => (
                <HStack>
                  {buttonProps.icon}
                  <Text>
                    {buttonProps.title}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack w='100%' h='100%' justifyContent='flex-end' alignItems='center'>
        <HStack w='100%' justifyContent='center' alignItems='center'>
          <HStack
            w='155px'
            h='40px'
            bg='#934670'
            borderRadius='16px'
            justifyContent='center'
            alignItems='center'
          >
            <Button
              w='100%'
              h='100%'
              bg='#FFFFFF'
              type="button"
              justifyContent='center'
              alignItems="center"
              variant="outline"
              border='1px #944670 solid'
              borderRadius='6px'
              onClick={onBack}
            >
              <Text
                color='#944670'
                fontWeight={500}
                fontSize="14px"
                lineHeight="20px"
              >
                Back
              </Text>
            </Button>
          </HStack>
        </HStack>
      </Stack>
      <Stack p={2} />
    </Stack>
  )
}
export default Step3