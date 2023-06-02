import React, { useState } from "react"
import { Button, FormControl, HStack, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react"
import { generatePath, useLocation, useNavigate } from "react-router-dom"
import CAccordion from "../../../components/CAccordion"
import { MagnifyingGlass } from "phosphor-react"
import AddTags from "./add-tags"
import TagsSelection from "./tags-selection"

const Step2 = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [initialTags, setInitialTags] = useState<string[]>([
    'Dairy',
    'Egg',
    'Gluten',
    'Peanut',
    'Seafood',
    'Sesame',
    'Sulphite',
    'Tree Nut',
    'Wheat'
  ])

  const [selectedTags, setSelectedTags] = useState<string[]>([])

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

  const [initialDietTags, setInitialDiet] = useState<string[]>([
    'Ketogenic',
    'Lacto Vegetarian',
    'Paleo',
    'Low Fodmap',
    'Vegan',
    'Vegetarian',
    'Ovo Vegetarian',
    'Pescatarian'
  ])

  const [selectedDietTags, setSelectedDietTags] = useState<string[]>([])

  const addDietTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedDietTags.find((tag: string) => tag === selectedTag)
    if (!tagAlreadyInSelectedTags) {
      setSelectedDietTags(
        [...selectedDietTags, selectedTag]
      )
      const filteredInitailTags = initialDietTags.filter((tag: string) => tag !== selectedTag)
      setInitialDiet(filteredInitailTags)
    }
  }

  const removeDietTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedDietTags.find((tag: string) => tag === selectedTag)
    if (tagAlreadyInSelectedTags) {
      setSelectedDietTags(selectedDietTags.filter((tag: string) => tag !== selectedTag))
      setInitialDiet(
        [...initialDietTags, selectedTag]
      )
    }
  }

  const [initialDietMealTags, setInitialDietMeal] = useState<string[]>([
    'Alcohol',
    'Avocado',
    'Bacon',
    'Banana',
    'Beef',
    'Brussel Sprouts',
    'Cilantro',
    'Coconut',
    'Eggplant',
    'Fish'
  ])

  const [selectedDietMealTags, setSelectedDietMealTags] = useState<string[]>([])

  const addDietMealTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedDietMealTags.find((tag: string) => tag === selectedTag)
    if (!tagAlreadyInSelectedTags) {
      setSelectedDietMealTags(
        [...selectedDietMealTags, selectedTag]
      )
      const filteredInitailTags = initialDietMealTags.filter((tag: string) => tag !== selectedTag)
      setInitialDietMeal(filteredInitailTags)
    }
  }

  const removeDietMealTag = (selectedTag: string) => {
    const tagAlreadyInSelectedTags = selectedDietMealTags.find((tag: string) => tag === selectedTag)
    if (tagAlreadyInSelectedTags) {
      setSelectedDietMealTags(selectedDietMealTags.filter((tag: string) => tag !== selectedTag))
      setInitialDietMeal(
        [...initialDietMealTags, selectedTag]
      )
    }
  }

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

        <Stack w='100%' justifyContent='flex-start' alignItems='center' spacing={30}>
          <CAccordion title='Are there any Foods or Spices that you are allergic to?'>
            <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='center'>
              <Stack w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
                <Stack w='100%'>
                  <Text
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='14px'
                    color='#616161'
                  >
                    Select or Search Foods & Spices that your allergic to
                  </Text>
                  
                  <FormControl>
                    <InputGroup size="md" justifyContent='center' alignItems='flex-start'>
                      <InputLeftElement>
                        <MagnifyingGlass size={24}/>
                      </InputLeftElement>
                      <Input
                        w='100%'
                        h='40px'
                        type="text"
                        id='search'
                        placeholder="Search"
                        color='white'
                      />
                    </InputGroup>
                  </FormControl>
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
            </Stack>
          </CAccordion>

          <CAccordion title='Are you following any specific Diet or Meal-plans? '>
            <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='center'>
              <Stack w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
                <Stack w='100%'>
                  <Text
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='14px'
                    color='#616161'
                  >
                    Select or Search Diets & Meal-plans that you are following...
                  </Text>
                  
                  <FormControl>
                    <InputGroup size="md" justifyContent='center' alignItems='flex-start'>
                      <InputLeftElement>
                        <MagnifyingGlass size={24}/>
                      </InputLeftElement>
                      <Input
                        w='100%'
                        h='40px'
                        type="text"
                        id='search'
                        placeholder="Search"
                        color='white'
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>

                <AddTags
                  title="Tap to add"
                  tags={initialDietTags}
                  addTag={(tag: string) => addDietTag(tag)}
                />

                <TagsSelection
                  title="Your Selections"
                  selectionTags={selectedDietTags}
                  onRemoveTag={(tag: string) => removeDietTag(tag)}
                />
              </Stack>
            </Stack>
          </CAccordion>

          <CAccordion title='Are you following any specific Diet or Meal-plans? '>
            <Stack w='100%' flexDirection='column' justifyContent='flex-start' alignItems='center'>
              <Stack w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
                <Stack w='100%'>
                  <Text
                    fontWeight={400}
                    fontSize='14px'
                    lineHeight='14px'
                    color='#616161'
                  >
                    Select or Search Foods that you dislike...
                  </Text>
                  
                  <FormControl>
                    <InputGroup size="md" justifyContent='center' alignItems='flex-start'>
                      <InputLeftElement>
                        <MagnifyingGlass size={24}/>
                      </InputLeftElement>
                      <Input
                        w='100%'
                        h='40px'
                        type="text"
                        id='search'
                        placeholder="Search"
                        color='white'
                      />
                    </InputGroup>
                  </FormControl>
                </Stack>

                <AddTags
                  title="Tap to add"
                  tags={initialDietMealTags}
                  addTag={(tag: string) => addDietMealTag(tag)}
                />

                <TagsSelection
                  title="Your Selections"
                  selectionTags={selectedDietMealTags}
                  onRemoveTag={(tag: string) => removeDietMealTag(tag)}
                />                
              </Stack>
            </Stack>
          </CAccordion>
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