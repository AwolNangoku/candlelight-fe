import React from "react"
import { PageLayout } from "../../components/layout"
import { Bell, Gear, MagnifyingGlass } from "phosphor-react"
import { Grid, GridItem, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react"

const Onboarding = () => {
  const navitems: {
    icon: React.ReactNode
    onIconClick: () => void
  }[] = [{
    icon: <MagnifyingGlass  size={24}/>,
    onIconClick: () => console.log('Visit')
  },
  {
    icon: <Gear size={24}/>,
    onIconClick: () => console.log('Settings')
  },
  {
    icon: <Bell size={24}/>,
    onIconClick: () => console.log('Notifications')
  }
]
  return (
    <PageLayout navItems={navitems}>
      <Stack w='100%'>
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
            <InputGroup w='100%'>
              <InputLeftElement pointerEvents='none'>
                <MagnifyingGlass size={24} />
              </InputLeftElement>
              <Input type='tex' placeholder='Search' />
            </InputGroup>
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
                <Stack>
                  <Text>
                    {tag}
                  </Text>
                </Stack>
              </GridItem>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </PageLayout>
  )
}
export default Onboarding