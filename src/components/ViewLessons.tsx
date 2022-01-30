import React, { useContext } from "react";
import { Box, Button, FlatList, HStack, Text } from "native-base";
import { Lesson, RootStackParamList, Unit } from "../assets/types";
import { units } from "../assets/dummyAPI.json";
import { Dimensions, ListRenderItem } from "react-native";
const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { UnitContext } from "../contexts/UnitContext";
import LessonDecoration from "./atoms/LessonDecoration";

const ViewLessons: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const BOX_SIZE = width * 0.9;
  const { unitID } = useContext(UnitContext);
  let { defaultColor, accentColor } = units[unitID];
  let currentUnitLessons = units[unitID].lessons;
  const spacer = (width - BOX_SIZE) / 2;
  currentUnitLessons.map((item, index) => {
    currentUnitLessons[index].defaultColor = defaultColor;
    currentUnitLessons[index].accentColor = accentColor;
  });
  const RenderItem: ListRenderItem<Lesson> = ({ item }) => {
    if (!item.name) {
      return <Box key={item.id} width={spacer}></Box>;
    }
    return (
      <Box width={BOX_SIZE} p={"0.5"} shadow={"6"} py={"3"} key={item.name}>
        <Box
          position={"relative"}
          bg={item.defaultColor}
          borderRadius={"lg"}
          py={6}
          px={4}
          alignItems={"flex-start"}
          overflow={"hidden"}
          zIndex={99}
        >
          {/* <Text color={"white"}>الدرس الثاني</Text> */}
          <Text color={"white"} fontSize={"3xl"} fontWeight={"bold"} mt={2}>
            {item.name}
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
            onPress={() => {
              navigation.navigate("Lesson", {
                lessonName: item.name,
                unitColor: item.defaultColor,
                unitAccentColor: item.accentColor,
                sections: item.sections,
                exam: item.exam,
              });
            }}
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
          <LessonDecoration accentColor={item.accentColor} />
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <FlatList
        // data={currentUnitLessons}
        data={[{ id: "before" }, ...currentUnitLessons, { id: "after" }]}
        horizontal
        keyExtractor={(item) => item.id.toString()}
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
