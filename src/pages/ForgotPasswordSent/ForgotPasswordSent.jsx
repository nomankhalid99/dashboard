import React from "react";
import Card from "../../components/Card";
import { Box, Center, Container, Icon, Text, VStack } from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";

const ForgotPasswordSent = () => {
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
              Successfully Sent
            </Text>
            <Text textAlign="center" color="black.60">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>
              . Please follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
