import { TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Box, HStack, Pressable, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
import { LessonContext } from "../../contexts/LessonContext";
import Svg, { G, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../assets/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TraverseButtons: React.FC = () => {
  const {
    setCurrentSection,
    sections,
    currentSection,
    exam,
    lessonName,
    unitAccentColor,
    unitColor,
  } = useContext(LessonContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Box px={5} mb={10} mt={5}>
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        {currentSection !== 0 ? (
          <TouchableOpacity
            onPress={() => {
              setCurrentSection(currentSection - 1);
            }}
            activeOpacity={0.9}
          >
            <Box bg={"#EFEEFF"} px={2} rounded={5}>
              <Feather name="corner-up-right" size={30} color="#AEA4FF" />
            </Box>
          </TouchableOpacity>
        ) : (
          <Box />
        )}
        {currentSection + 1 !== sections.length ? (
          <TouchableOpacity
            onPress={() => {
              setCurrentSection(currentSection + 1);
            }}
            activeOpacity={0.9}
          >
            <Box bg={"#EFEEFF"} px={2} rounded={5}>
              <Feather name="corner-up-left" size={30} color="#AEA4FF" />
            </Box>
          </TouchableOpacity>
        ) : (
          <Pressable
            bg="#312C5A"
            py={2}
            px={10}
            rounded={5}
            position={"relative"}
            overflow={"hidden"}
            onPress={() =>
              navigation.navigate("Exam", {
                exam: exam,
                lessonName: lessonName,
                unitAccentColor: unitAccentColor,
                unitColor: unitColor,
              })
            }
          >
            <Text color="white" zIndex={22} fontWeight={"bold"} fontSize={"lg"}>
              ابدا الاختبار
            </Text>
            <Svg
              width="135.549"
              height="73.327"
              viewBox="0 0 135.549 73.327"
              style={{ position: "absolute" }}
            >
              <G id="Group_88" transform="translate(-42.836 -783.559)">
                <Path
                  id="Path_79"
                  d="M67.774-6.523c52.971-31.687,67.774,13.971,67.774,31.2s-30.344,31.2-67.774,31.2S0,41.916,0,24.682,14.8,25.164,67.774-6.523Z"
                  transform="translate(42.836 801)"
                  fill="#ff843e"
                />
              </G>
            </Svg>
          </Pressable>
        )}
      </HStack>
    </Box>
  );
};

export default TraverseButtons;
