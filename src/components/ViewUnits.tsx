import React from "react";
import { Dimensions, FlatList, Animated, ListRenderItem } from "react-native";
import { Box, HStack, Text } from "native-base";
import { Unit } from "../assets/dummyAPIJson";
import { units } from "../assets/dummyAPI.json";
import Svg, { Path } from "react-native-svg";
const { width } = Dimensions.get("window");

export const ViewUnits: React.FC = () => {
  const BOX_SIZE = width * 0.95;
  const RenderItem: ListRenderItem<Unit> = ({ item }) => {
    return (
      <Box width={BOX_SIZE} mt={10} key={item.name}>
        <Box
          bg={"#322B60"}
          mx={1}
          py={6}
          px={4}
          borderRadius={"lg"}
          position={"relative"}
          overflow={"hidden"}
          shadow={9}
        >
          <Box zIndex={20}>
            <Text
              fontSize={"lg"}
              color={"#fff"}
              textAlign={"left"}
              fontWeight={700}
            >
              {item.name}
            </Text>
            <HStack flexWrap={"wrap"}>
              {item.lessons.map((item) => {
                return (
                  <Box
                    bg={item.isFinished ? "#fff" : "#110A3E"}
                    mr={2}
                    mt={3}
                    width={"16"}
                    height={"2"}
                    rounded={"xs"}
                  ></Box>
                );
              })}
            </HStack>
          </Box>
          <Svg
            width="181.69"
            height="181.69"
            viewBox="0 0 181.69 181.69"
            style={{
              position: "absolute",
              right: -45,
              top: -20,
            }}
          >
            <Path
              id="Path_28"
              data-name="Path 28"
              d="M57.994,145.391c26.78,1.381,58.84-24.129,68.67-57.836s-68-75.54-88.872-79.815c-.313-.064-.624-.121-1.313-.229C16.552,4.288,4.606,31.384,10.1,68.825,15.679,106.836,31.214,144.01,57.994,145.391Z"
              transform="translate(193.014 96.648) rotate(135)"
              fill={item.defaultColor}
            />
          </Svg>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <FlatList
        data={units}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={BOX_SIZE - 10}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        renderItem={RenderItem}
      />
    </Box>
  );
};

export default ViewUnits;
