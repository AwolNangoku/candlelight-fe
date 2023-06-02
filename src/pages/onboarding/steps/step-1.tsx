import React from "react";
import { Button, FormControl, Grid, GridItem, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { generatePath, useLocation, useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onNext = () => {
    navigate(
      generatePath('/onboarding/:step', { step: '2' }),
      { state: { from: location }}
    )
  }

  return (
    <Stack w='100%'>
      <Stack w='100%' p='10px' flexDirection='column' alignItems='center'>
        <Stack w='100%' justifyContent='center' align='center'>
          <Text
            fontWeight={400}
            fontSize='24px'
            lineHeight='24px'
          >
            What are some of Your Favourite Cuisines & meals?
          </Text>
        </Stack>

        <Stack w='100%' justifyContent='flex-start'>
          <Text
            fontWeight={400}
            fontSize='14px'
            lineHeight='14px'
            color='#616161'
          >
            Select or Search some Cuisine Types
          </Text>
          <Stack w='100%'>
            <FormControl>
              <InputGroup
                w='100%'
                size="md"
                h='40px'
                justifyContent='flex-start'
                alignItems='center'
                borderRadius='8px'
              >
                <InputLeftElement>
                  <MagnifyingGlass size={24}/>
                </InputLeftElement>
                <Input
                  w='100%'
                  h='100%'
                  type="search"
                  placeholder="Search"
                  color='white'
                />
              </InputGroup>
            </FormControl>
          </Stack>
        </Stack>

        <Stack w='100%' justifyContent='flex-start'>
          <Text
            fontWeight={500}
            fontSize='14px'
            lineHeight='22px'
            color='#272727'
          >
            Tap to add
          </Text>
          <Grid templateColumns='repeat(3, 1fr)' gap={6} w='100%'>
            {[
              'American',
              'Asian',
              'South African',
              'Chines',
              'Cuban',
              'English',
              'French',
              'Braai',
              'Japanese',
              'Thai'
            ].map((tag: string) => (
              <GridItem w='100%' key={tag}>
                <Stack
                  bg='#EF8C3B33'
                  borderRadius='25px'
                  justifyContent='center'
                  alignItems='center'
                  cursor='pointer'
                >
                  <Text
                    fontWeight={400}
                    fontSize='16px'
                    lineHeight='24px'
                    color='#616161'
                  >
                    {tag}
                  </Text>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Stack>

      <Stack w='100%' h='100%' justifyContent='flex-end' alignItems='center'>
        <Stack w='100%' justifyContent='flex-end' alignItems='center'>
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
        </Stack>
      </Stack>
    </Stack>
  )
}
export default Step1