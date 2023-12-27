import { Box, Button, Card, Divider, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FaBtc, FaRupeeSign } from "react-icons/fa6";

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs.81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "PKR Deposit",
      amount: "+ Rs.81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <Card bg="white" p={6} borderRadius="xl" h='full'>
      <Text mb={6}>Recent Transactions</Text>
      <Stack spacing={4}>
        {transactions.map((transaction,i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider/>}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justifyContent="space-between" w="full">
                <Stack spacing={0}>
                  <Text fontSize="18px">{transaction.text}</Text>
                  <Text fontSize="14px" color="black.60">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text fontSize="16px">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w='full' mt={6} colorScheme="gray">View All</Button>
    </Card>
  );
};

export default Transactions;
