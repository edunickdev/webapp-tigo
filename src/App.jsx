import { NextUIProvider } from "@nextui-org/react";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
      <NextUIProvider>
        <AppRouter />
      </NextUIProvider>
  );
}

export default App;
