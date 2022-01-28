import { View, SafeAreaView } from "react-native";
import React, { createContext, useState } from "react";
import ViewUnits from "../components/ViewUnits";
import ViewLessons from "../components/ViewLessons";
import { Box, Text } from "native-base";

export const UnitContext = createContext<any>(null);
const Home = () => {
  const [unitID, setUnitID] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      <Box px={"5"}>
        <Box
          bg={"white"}
          borderTopWidth={4}
          borderColor="blueGray.900"
          shadow={"2"}
          borderRadius={"lg"}
          px="4"
          alignItems={"flex-start"}
          py={2}
        >
          <Text fontWeight={"bold"}>قال النبي ﷺ :</Text>
          <Text textAlign={"left"}>
            من سلك طريقا يلتمس فيه علما سهل الله له به طريقا الى الجنة
          </Text>
        </Box>
      </Box>
      {/* show lessons based on unit name or index or id */}
      <UnitContext.Provider value={{ unitID, setUnitID }}>
        <ViewUnits />
        <ViewLessons />
      </UnitContext.Provider>
    </SafeAreaView>
  );
};

export default Home;
