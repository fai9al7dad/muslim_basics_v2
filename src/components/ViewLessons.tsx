import React from "react";
import { Box, Button, FlatList, HStack, Text } from "native-base";
import { Lesson, Unit } from "../assets/dummyAPIJson";
import { units } from "../assets/dummyAPI.json";
import Svg, { G, Path } from "react-native-svg";
import { Dimensions, ListRenderItem } from "react-native";
const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
const ViewLessons: React.FC = () => {
  const BOX_SIZE = width * 0.95;

  const RenderItem: ListRenderItem<Unit> = ({ item }) => {
    return (
      <Box
        width={BOX_SIZE}
        mt={10}
        key={item.name}
        position={"relative"}
        shadow={9}
        mx={1}
        bg={item.defaultColor}
        borderRadius={"lg"}
        py={6}
        px={4}
        alignItems={"flex-start"}
        overflow={"hidden"}
        zIndex={99}
      >
        <Text color={"white"}>الدرس الثاني</Text>
        <Text color={"white"} fontSize={"3xl"} fontWeight={"bold"} mt={2}>
          معنى لا إله إلا الله
        </Text>
        <Text color={"white"} fontSize={"lg"} fontWeight={"bold"} mt={2}>
          الأهداف
        </Text>
        <HStack alignItems={"center"} mt={2}>
          <Text fontSize={"lg"}>🎯</Text>
          <Text ml={2} color={"white"}>
            تعرف معنى لا اله الا الله
          </Text>
        </HStack>
        <Button
          bg={"white"}
          borderBottomWidth={5}
          py={3}
          borderBottomColor={"#322B60"}
          borderRadius={"lg"}
          borderBottomRadius={"lg"}
          width={"40%"}
          mt={5}
        >
          <HStack alignItems={"center"}>
            <Text fontWeight={"bold"} fontSize={"lg"} mr={2}>
              ابدا
            </Text>
            <Ionicons
              name="arrow-back-circle-sharp"
              size={25}
              color="#322B60"
            />
          </HStack>
        </Button>
        <Svg
          width="233.647"
          height="193.387"
          viewBox="0 0 233.647 193.387"
          style={{ position: "absolute", bottom: -90, zIndex: -4 }}
        >
          <G
            id="Group_64"
            dataName="Group 64"
            transform="translate(-148.353 -148.95)"
          >
            <Path
              id="Path_13"
              dataName="Path 13"
              d="M92.241,70.788C153.049,11.366,198,20.036,198,92.945S153.676,224.957,99,224.957-54.739,165.035-32.429,112.181,31.432,130.21,92.241,70.788Z"
              transform="translate(184 117.38)"
              fill={item.accentColor}
            />
          </G>
        </Svg>
        <Svg
          width="136"
          height="197"
          viewBox="0 0 136 197"
          style={{ position: "absolute", top: -50, right: -75, zIndex: -4 }}
        >
          <G
            id="Group_63"
            dataName="Group 63"
            transform="translate(61 87)"
            style={{ position: "absolute" }}
          >
            <G
              id="Path_84"
              dataName="Path 84"
              transform="translate(-61 -87)"
              fill="none"
            >
              <Path
                d="M68,0c37.555,0,68,44.1,68,98.5S105.555,197,68,197,0,152.9,0,98.5,30.445,0,68,0Z"
                stroke="none"
              />
              <Path
                d="M 68 7 C 34.364501953125 7 7 48.04672241210938 7 98.5 C 7 148.9532775878906 34.364501953125 190 68 190 C 101.635498046875 190 129 148.9532775878906 129 98.5 C 129 48.04672241210938 101.635498046875 7 68 7 M 68 0 C 105.5553436279297 0 136 44.0999755859375 136 98.5 C 136 152.9000244140625 105.5553436279297 197 68 197 C 30.44462585449219 197 0 152.9000244140625 0 98.5 C 0 44.0999755859375 30.44462585449219 0 68 0 Z"
                stroke="none"
                fill={item.accentColor}
              />
            </G>
          </G>
        </Svg>
      </Box>
    );
  };
  return (
    <Box>
      <FlatList
        data={units}
        horizontal
        // keyExtractor={(item) => item.id.toString()}
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

export default ViewLessons;
