"use client";

import { Box, Button, Input, HStack, Center } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"

export default function Home() {
  return (
    <Center>
      <Box mt="40vh">
        <HStack>
          <Input htmlSize={40} width='auto' />
          <Button leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
            Add To-do
          </Button>
        </HStack>
      </Box>
    </Center>
  )
}
