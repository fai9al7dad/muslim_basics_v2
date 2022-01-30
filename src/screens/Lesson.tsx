import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../assets/types";
import { Box, HStack, Pressable, ScrollView, Text, VStack } from "native-base";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import LessonHeader from "../components/lesson/LessonHeader";
import { LessonContext } from "../contexts/LessonContext";
import LessonProgress from "../components/lesson/LessonProgress";
import TraverseButtons from "../components/lesson/TraverseButtons";

type props = NativeStackScreenProps<RootStackParamList, "Lesson">;

const Lesson: React.FC<props> = ({ route }: props) => {
  const { lessonName, unitAccentColor, unitColor, sections, exam } =
    route.params;
  const [currentSection, setCurrentSection] = useState(0);
  const [viewMode, setViewMode] = useState("light");

  return (
    <LessonContext.Provider
      value={{
        viewMode,
        setViewMode,
        sections,
        currentSection,
        setCurrentSection,
        unitColor,
        unitAccentColor,
        lessonName,
        exam,
      }}
    >
      <ScrollView
        bounces={false}
        contentContainerStyle={{
          justifyContent: "space-between",
          backgroundColor: viewMode === "light" ? "#f9f9f9" : "#111827",
          flex: 1,
        }}
      >
        <Box>
          <LessonHeader />
          <Box
            alignItems={"flex-start"}
            mt={5}
            px={5}
            justifyContent={"space-between"}
          >
            <Box>
              <LessonProgress />
              <Text
                textAlign={"left"}
                fontSize={"lg"}
                fontWeight={"bold"}
                color={viewMode === "light" ? "black" : "white"}
                mt={7}
              >
                {sections[currentSection].title}
              </Text>
              <Text
                textAlign={"left"}
                fontSize={"md"}
                mt={2}
                color={viewMode === "light" ? "black" : "#D5E2FF"}
                lineHeight={27}
              >
                {sections[currentSection].body}
              </Text>
            </Box>
          </Box>
        </Box>
        {currentSection !== 0 ? (
          <Pressable
            position={"absolute"}
            left={0}
            height={"100%"}
            width={"30%"}
            onPress={() => setCurrentSection(currentSection - 1)}
          />
        ) : null}
        {currentSection + 1 !== sections.length ? (
          <Pressable
            position={"absolute"}
            right={0}
            height={"100%"}
            width={"30%"}
            onPress={() => setCurrentSection(currentSection + 1)}
          />
        ) : null}

        <TraverseButtons />
      </ScrollView>
    </LessonContext.Provider>
  );
};

export default Lesson;
