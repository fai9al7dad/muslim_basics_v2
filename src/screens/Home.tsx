import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import ViewUnits from "../components/ViewUnits";
import { Box } from "native-base";
import ViewLessons from "../components/ViewLessons";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fbfbfb" }}>
      <ViewUnits />
      <ViewLessons />
    </SafeAreaView>
  );
};

export default Home;
