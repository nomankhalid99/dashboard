import { Card, Tag, Text } from "@chakra-ui/react";
import React from "react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <Card
      bg={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
      p={6}
      borderRadius="xl"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bgColor={inverted ? "white" : "p.purple"}
        borderRadius='full'
      >
        {tagText}
      </Tag>
      <Text mt={4}
        fontWeight='medium'
        fontSize='16px'
        color={inverted ? "white" : "black.80"}
      >{text}</Text>
    </Card>
  );
};

export default InfoCard;
