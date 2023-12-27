import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem" flexGrow={1}>
        <Stack spacing={6}>
          <Text fontSize="16px" fontWeight="medium">
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your Name..." />
            </FormControl>
            <FormControl>
              <FormLabel>SurName</FormLabel>
              <Input placeholder="Enter your SurName..." />
            </FormControl>
          </HStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your Email..." />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your Message..." />
          </FormControl>
          <Checkbox defaultChecked>
            <Text fontSize="14px">
              I agree with
              <Box as="span" color="p.purple">
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>
          <Stack>
            <Button fontSize="14px">Send a Message</Button>
            <Button fontSize="14px" colorScheme="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
  )
}

export default ContactCard