import { GlobalStyle } from "./global-style.jsx";
import { Background } from "./components/background"
import { AppRoutes } from "./pages/routes"
import { ThemeProvider} from "./contexts/theme-context"
import { ThemeTogglerButton } from "./components/theme-toggler-button.jsx"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <Background />

      <ThemeTogglerButton />

      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
