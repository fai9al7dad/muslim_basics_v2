import React from "react";
import { extendTheme, NativeBaseProvider } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Routes from "./src/Routes";

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
      <Routes />
    </NativeBaseProvider>
  );
}

// Color Switch Component
