import React, { useState } from "react";
import { Button, FormControl, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { generatePath, useLocation, useNavigate } from "react-router-dom";
import AddTags from "./add-tags";
import TagsSelection from "./tags-selection";

const Step1 = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [initialTags, setInitialTags] = useState<string[]>([
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
  ])

  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const onNext = () => {
    navigate(
      generatePath('/onboarding/:step', { step: '2' }),
      { state: { from: location }}
    )
  }

  const addTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedTags.find((tag: string) => tag === selectedTag)
    if (!tagAlreadyInSelectedTags) {
      setSelectedTags(
        [...selectedTags, selectedTag]
      )
      const filteredInitailTags = initialTags.filter((tag: string) => tag !== selectedTag)
      setInitialTags(filteredInitailTags)
    }
  }

  const removeTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedTags.find((tag: string) => tag === selectedTag)
    if (tagAlreadyInSelectedTags) {
      setSelectedTags(selectedTags.filter((tag: string) => tag !== selectedTag))
      setInitialTags(
        [...initialTags, selectedTag]
      )
    }
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

        <AddTags
          title="Tap to add"
          tags={initialTags}
          addTag={(tag: string) => addTag(tag)}
        />

        <TagsSelection
          title="Your Selections"
          selectionTags={selectedTags}
          onRemoveTag={(tag: string) => removeTag(tag)}
        />
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