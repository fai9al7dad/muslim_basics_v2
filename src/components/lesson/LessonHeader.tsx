import { View, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Box, Button, HStack, Pressable, Text } from "native-base";
import LessonDecoration from "../atoms/LessonDecoration";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LessonContext } from "../../contexts/LessonContext";

const LessonHeader: React.FC = () => {
  const navigation = useNavigation();
  const { viewMode, setViewMode, unitColor, unitAccentColor, lessonName } =
    useContext(LessonContext);
  return (
    <Box
      bg={unitColor}
      position={"relative"}
      overflow={"hidden"}
      justifyContent={"center"}
      zIndex={99}
      pt={5}
      roundedBottom={16}
      shadow={"5"}
    >
      <SafeAreaView>
        <LessonDecoration accentColor={unitAccentColor} />
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-forward" size={40} color="white" />
          </TouchableOpacity>
          <Text
            textAlign={"center"}
            color={"white"}
            fontSize={"2xl"}
            fontWeight={"bold"}
          >
            {lessonName}
          </Text>
          <Box width={10} />
        </HStack>
        {/* gray bar  */}
        <Box bg={viewMode === "light" ? "#fff" : "#374151"}>
          <HStack
            alignItems={"center"}
            justifyContent={"space-between"}
            px={10}
            py={1}
          >
            <Pressable
              bg={viewMode === "light" ? "#f9f9f9" : "#374151"}
              shadow={viewMode === "light" ? 1 : null}
              rounded={5}
              width={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              py={1}
              onPress={() => {
                setViewMode("light");
              }}
              zIndex={29}
            >
              <HStack alignItems={"center"}>
                <Ionicons
                  name="ios-sunny-outline"
                  size={20}
                  color={viewMode === "light" ? "black" : "#f9f9f9"}
                />
                <Text
                  ml={1}
                  fontSize={"xs"}
                  color={viewMode === "light" ? "black" : "#f9f9f9"}
                >
                  فاتح
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              bg={viewMode === "light" ? "#fff" : "#5C6A83"}
              shadow={viewMode === "dark" ? 1 : null}
              rounded={5}
              width={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              py={1}
              onPress={() => {
                setViewMode("dark");
              }}
            >
              <HStack alignItems={"center"}>
                <Ionicons
                  name="ios-moon-outline"
                  size={18}
                  color={viewMode === "light" ? "black" : "#f9f9f9"}
                  fontSize={"sm"}
                />
                <Text
                  ml={1}
                  fontSize={"xs"}
                  color={viewMode === "light" ? "black" : "#f9f9f9"}
                >
                  غامق
                </Text>
              </HStack>
            </Pressable>
          </HStack>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default LessonHeader;
