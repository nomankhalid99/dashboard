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
import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
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
            <Icon as={MdEmail} boxSize="48px" color="p.purple" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Email Verification
            </Text>
            <Text textAlign="center" color="black.60">
              We have sent you an email verification to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>
              . If you didn’t receive it, click the button below.
            </Text>
            <Button variant="outline" w="full">
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
