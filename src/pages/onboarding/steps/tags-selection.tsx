import { Grid, GridItem, HStack, Stack, Text } from "@chakra-ui/react";
import { X } from "phosphor-react";
import React from "react";

interface ITagsSelectionProps {
  title: string
  selectionTags: string[]
  onRemoveTag: (selectedTag: string) => void
}

const TagsSelection = ({
  title,
  selectionTags,
  onRemoveTag
}: ITagsSelectionProps
) => {
  return (
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
      {selectionTags.map((tag: string) => (
        <GridItem w='100%' key={tag}>
          <HStack
            w='100%'
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
            <X
              role='button'
              size={24}
              color="#616161"
              onClick={() => onRemoveTag(tag)}
            />
          </HStack>
        </GridItem>
      ))}
    </Grid>
  </Stack>
  )
}
export default TagsSelection