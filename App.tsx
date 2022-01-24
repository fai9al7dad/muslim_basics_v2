import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";

import Home from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "montserrat-bold": require("./src/assets/fonts/Montserrat-Arabic-Bold.otf"),
    montserrat: require("./src/assets/fonts/Montserrat-Arabic-Regular.otf"),
  });
  const theme = extendTheme({
    fontConfig: {
      montserrat: {
        400: {
          normal: "montserrat",
        },
        700: {
          normal: "montserrat-bold",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "montserrat",
      body: "montserrat",
      mono: "montserrat",
      global: "montserrat",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}

// Color Switch Component
