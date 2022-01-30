import React, { useState } from "react";
import { Box, Circle, HStack, Pressable, Text } from "native-base";
import { Answer, RootStackParamList } from "../assets/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity } from "react-native";
import LessonDecoration from "../components/atoms/LessonDecoration";
import { useNavigation } from "@react-navigation/native";

type props = NativeStackScreenProps<RootStackParamList, "Exam">;

const Exam: React.FC<props> = ({ route }: props) => {
  const { lessonName, exam, unitColor, unitAccentColor } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [buttonColor, setButtonColor] = useState("white");
  const [buttonBorderColor, setBorderButtonColor] = useState("white");
  const [answered, setAnswered] = useState(false);
  const questions = exam.questions;
  const currentQuestionAnswers = exam.questions[currentQuestionIndex].answers;
  const currentQuestion = exam.questions[currentQuestionIndex].question;
  const navigation = useNavigation();
  function validateAnswer(answer: Answer | null) {
    console.log(answer);
    setAnswered(true);
    if (selectedAnswer?.isCorrect) {
      setButtonColor("#4ADE80");
      setBorderButtonColor("#22C55E");
    } else {
      setButtonColor("#F87171");
      setBorderButtonColor("#EF4444");
    }
  }
  function changeQuestion() {
    if (currentQuestionIndex + 1 !== questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setButtonColor("white");
      setBorderButtonColor("white");
      setAnswered(false);
    } else {
      console.log("finished exam");
    }
  }
  return (
    <Box style={{ backgroundColor: "#fbfbfb", flex: 1 }}>
      <Box>
        <Box justifyContent={"space-between"} height={"100%"}>
          <Box>
            <Box
              bg={unitColor}
              position={"relative"}
              overflow={"hidden"}
              justifyContent={"center"}
              zIndex={99}
              p={2}
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
                    fontSize={"lg"}
                    fontWeight={"bold"}
                  >
                    اختبار في {lessonName}
                  </Text>
                  <Box width={10} />
                </HStack>
              </SafeAreaView>
            </Box>
            <Box px={5} mt={4}>
              <Text color="#959595" textAlign={"left"} fontSize={"xs"}>
                السؤال {currentQuestionIndex + 1} من {questions.length}
              </Text>
              <Text
                fontSize={"lg"}
                fontWeight={"bold"}
                color={"#464646"}
                textAlign={"left"}
              >
                {currentQuestion}
              </Text>
            </Box>
          </Box>
          <Box px={5}>
            {currentQuestionAnswers.map((item) => {
              return (
                <Pressable
                  bg={"white"}
                  py={5}
                  mb={5}
                  px={4}
                  rounded={6}
                  style={{
                    shadowColor: "#000000",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.05,
                    shadowRadius: 20,
                  }}
                  onPress={() => {
                    if (!answered) {
                      setSelectedAnswer(item);
                    }
                  }}
                >
                  <HStack alignItems={"center"}>
                    <Circle
                      size={"20px"}
                      bg={selectedAnswer === item ? "#FF843E" : "#FBFBFB"}
                      borderColor={
                        selectedAnswer === item ? "#FFA572" : "#efefef"
                      }
                      borderWidth={1}
                      style={{
                        shadowColor:
                          selectedAnswer === item ? "#FF843E" : "#fbfbfb",
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 1,
                        shadowRadius: 5,
                      }}
                    ></Circle>
                    <Text color="#464646" ml={2} fontSize={"lg"}>
                      {item.title}
                    </Text>
                  </HStack>
                </Pressable>
              );
            })}
            {!answered ? (
              <Pressable
                bg={selectedAnswer?.title ? "#322B60" : "white"}
                mb={"16"}
                mt={"32"}
                rounded={5}
                style={{
                  shadowColor: "#000000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                }}
                borderBottomWidth={8}
                borderBottomColor={selectedAnswer?.title ? "#19114B" : "white"}
                onPress={() => {
                  validateAnswer(selectedAnswer);
                }}
              >
                <Text
                  fontSize={"lg"}
                  textAlign={"center"}
                  color="#E3E3E3"
                  fontWeight={"bold"}
                  py={4}
                >
                  تحقق
                </Text>
              </Pressable>
            ) : (
              <Pressable
                bg={buttonColor}
                mb={"16"}
                mt={"32"}
                rounded={5}
                style={{
                  shadowColor: "#000000",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.05,
                  shadowRadius: 20,
                }}
                borderBottomWidth={8}
                borderBottomColor={buttonBorderColor}
                onPress={() => {
                  changeQuestion();
                }}
              >
                <Text
                  fontSize={"lg"}
                  textAlign={"center"}
                  color="white"
                  fontWeight={"bold"}
                  py={4}
                >
                  تابع
                </Text>
              </Pressable>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Exam;
