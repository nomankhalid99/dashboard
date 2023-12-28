import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { object, string,} from "yup";
import Card from "../../components/Card";
import { FaArrowLeftLong } from "react-icons/fa6";

let forgotValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
         p={{
            base: "4",
            md: "10",
          }}
          showCard={true}>
          <Link to="/signin">
            <Icon as={FaArrowLeftLong} boxSize={6} />
          </Link>
          <Text mt={4} textStyle="h1" fontWeight="medium">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt={4}>
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt={8} spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email..."
                        />
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button w="full" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
