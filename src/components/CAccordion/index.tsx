import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, HStack, Text } from "@chakra-ui/react";
import React from "react";

type CAccordionProps = {
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const CAccordion: React.FC<CAccordionProps> = ({
  title,
  icon,
  children
}) => {
  return (
    <Accordion
      w="100%"
      borderRadius="12px"
      allowMultiple
      bg='#FFFFFF'
    >
      <AccordionItem
        borderStyle="none"
      >
        <AccordionButton
          borderStyle="none"
        >
          <HStack
            pb={2}
            w="100%"
            justifyContent="space-between"
            align="center"
          >
            <HStack>
              <Text
                fontWeight={500}
                fontSize="18px"
                lineHeight="26px"
                color='#301D2A'
                casing="capitalize"
              >
                {title}
              </Text>
              {icon}
            </HStack>
            <AccordionIcon />
          </HStack>
        </AccordionButton>

        <AccordionPanel>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
export default CAccordion