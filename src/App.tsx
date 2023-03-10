import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FBF8F1",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="brand.100">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
