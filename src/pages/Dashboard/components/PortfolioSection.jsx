import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      p={6}
      borderRadius="xl"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 2,
          md: 12,
          lg: 16,
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
        align={{
          base: "flex-start",
          md: "center",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px" fontWeight="medium">
              Total Portfolio Value
            </Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text fontSize="24px" fontWeight="medium">
            PKR 112,233.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px" fontWeight="medium">
              Wallet Balances
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
                22.3409430
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text fontSize="24px" fontWeight="medium">
                PKR 1,300.00
              </Text>
              <Tag colorScheme="gray">PKR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button borderRadius="14px" leftIcon={<Icon as={FaArrowDown} />}>
          Deposit
        </Button>
        <Button borderRadius="14px" leftIcon={<Icon as={FaArrowUp} />}>
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
