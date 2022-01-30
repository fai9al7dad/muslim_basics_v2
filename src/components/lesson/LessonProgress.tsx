import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Box, HStack } from "native-base";
import { LessonContext } from "../../contexts/LessonContext";

interface itemProp {
  title: string;
  body: string;
}
const LessonProgress: React.FC = () => {
  const { sections, currentSection } = useContext(LessonContext);
  return (
    <HStack flexWrap={"wrap"}>
      {sections.map((item: itemProp, index: number) => {
        return (
          <Box
            key={item.title}
            bg={index === currentSection ? "#322B60" : "#DEDAF6"}
            opacity={index === currentSection ? "1" : "0.35"}
            height={2}
            width={"16"}
            mr={1}
            rounded={2}
            mb={2}
          />
        );
      })}
    </HStack>
  );
};

export default LessonProgress;
