import React, { useContext, useState } from "react";
import { Dimensions, FlatList, Animated, ListRenderItem } from "react-native";
import { Box, HStack, Text } from "native-base";
import { Unit, Lesson } from "../assets/types";
import { units } from "../assets/dummyAPI.json";
import Svg, { Path } from "react-native-svg";
import { UnitContext } from "../contexts/UnitContext";
const { width } = Dimensions.get("window");

export const ViewUnits: React.FC = () => {
  const BOX_SIZE = width * 0.9;
  const spacer = (width - BOX_SIZE) / 2;
  const { setUnitID } = useContext(UnitContext);
  const RenderItem: ListRenderItem<Unit | any> = ({ item }) => {
    if (!item.name) {
      return <Box key={item.id} width={spacer}></Box>;
    }
    return (
      <Box
        width={BOX_SIZE}
        p={"0.5"}
        mt={10}
        key={item.name}
        shadow={"6"}
        py={"4"}
      >
        <Box
          bg={"#322B60"}
          py={6}
          px={4}
          borderRadius={"lg"}
          position={"relative"}
          overflow={"hidden"}
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
              {item.lessons.map((lesson: Lesson, index: number) => {
                return (
                  <Box
                    key={index}
                    bg={lesson.isFinished ? "#fff" : "#110A3E"}
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
              fill={item?.defaultColor}
            />
          </Svg>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <FlatList
        // data={units}
        data={[{ id: -1 }, ...units, { id: -2 }]}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        onScroll={(e) => {
          let offset = e.nativeEvent.contentOffset.x;
          let index = Math.round(offset / BOX_SIZE); //  cell هنا هو ارتفاع ال height
          setUnitID(index);
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={BOX_SIZE}
        decelerationRate={0}
        bounces={false}
        scrollEventThrottle={16}
        renderItem={RenderItem}
      />
    </Box>
  );
};

export default ViewUnits;
