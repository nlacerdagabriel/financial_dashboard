import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
