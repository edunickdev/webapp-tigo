import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <NextUIProvider>
        <AppRouter />
      </NextUIProvider>
    </>
  );
}

export default App;
