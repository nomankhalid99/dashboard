import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { MdEmail } from "react-icons/md";

const SupportCard = ({leftcomponent, icon, title, text}) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxWidth="380px">
        <Icon as={icon} boxSize={8} color="p.purple" />
        <Heading as="h1">{title}</Heading>
        <Text fontSize="16px" color="black.60">
         {text}
        </Text>
      </Stack>
      <Box maxWidth='550px' width='full'>
      {leftcomponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
