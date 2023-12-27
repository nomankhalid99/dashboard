import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const PricingSection = () => {
  const timeStamps = ["7:15PM", "7:55PM", "8:15PM", "9:15PM", "9:55PM"];
  return (
    <Card bg="white" p={6} borderRadius="xl">
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px" fontWeight="medium">
              Current Prices
            </Text>
          </HStack>
          <HStack
            spacing={{
              base: 3,
              md: 4,
              lg: 6,
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text fontSize="24px" fontWeight="medium">
                PKR 1,300.00
              </Text>
              <HStack
                spacing={1}
                fontSize="14px"
                fontWeight="medium"
                color="green"
              >
                <Icon as={FaArrowTrendUp} />
                <Text>22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button borderRadius="14px" leftIcon={<Icon as={FaPlusCircle} />}>
            Buy
          </Button>
          <Button borderRadius="14px" leftIcon={<Icon as={FaMinusCircle} />}>
            Sell
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify="flex-end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                fontSize="14px"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="Graph.svg" w="100%" mt="50px" />
            <HStack justifyContent="space-between">
              {timeStamps.map((timeStamp) => (
                <Text key={timeStamp} fontSize="14px" color="black.80">
                  {timeStamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default PricingSection;
