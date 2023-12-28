import React from "react";
import Card from "../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RegisterEmailSuccess = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={FaCircleCheck} boxSize="48px" color="green" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Successfully Registration
            </Text>
            <Text textAlign="center" color="black.60">
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </Text>
            <Box w="full">
              <Link to="/signin">
                <Button w="full">Enter the App</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailSuccess;
