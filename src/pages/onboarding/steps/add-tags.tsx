import { Grid, GridItem, Stack, Text } from "@chakra-ui/react"
import React from "react"

interface AddTagsProps {
  title: string
  tags: string[],
  addTag: (selectedTag: string) => void
}

const AddTags = ({
  title,
  tags,
  addTag
}: AddTagsProps) => {
  return (
    <Stack w='100%'>
      <Stack w='100%' justifyContent='flex-start'>
        <Text
          fontWeight={500}
          fontSize='14px'
          lineHeight='22px'
          color='#272727'
        >
          {title}
        </Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} w='100%'>
          {tags.map((tag: string) => (
            <GridItem w='100%' key={tag}>
              <Stack
                bg='#EF8C3B33'
                borderRadius='25px'
                justifyContent='center'
                alignItems='center'
                cursor='pointer'
                onClick={() => addTag(tag)}
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
  )
}
export default AddTags