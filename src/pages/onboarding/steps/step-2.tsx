import React from "react"
import { Button, HStack, Stack, Text } from "@chakra-ui/react"
import { generatePath, useLocation, useNavigate } from "react-router-dom"
import CAccordion from "../../../components/CAccordion"

const Step2 = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onNext = () => {
    navigate(
      generatePath('/onboarding/:step', { step: '3' }),
      { state: { from: location }}
    )
  }

  const onBack = () => {
    navigate('/onboarding')
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
          {[
            'Are there any Foods or Spices that you are allergic to?',
            'Are you following any specific Diet or Meal-plans? ',
            'What are the Foods you don’t like?'
          ].map((accordionTitle: string) => (
            <CAccordion key={accordionTitle} title={accordionTitle}>
              <Stack w='100%'>
                <Text>title A</Text>
              </Stack>
            </CAccordion>
          ))}
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
              bg='#934670'
              type="button"
              justifyContent='center'
              alignItems="center"
              variant="outline"
              border='none'
              borderRadius='6px'
              onClick={onNext}
            >
              <Text
                color='white'
                fontWeight={500}
                fontSize="14px"
                lineHeight="20px"
              >
                Next
              </Text>
            </Button>
          </HStack>
        </HStack>
      </Stack>
      <Stack p={2} />
    </Stack>
  )
}
export default Step2