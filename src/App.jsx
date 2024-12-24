import { NextUIProvider } from "@nextui-org/react";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
        // Envuelve la aplicación con el proveedor de NextUI para aplicar los estilos y contexto global

      <NextUIProvider>
        <AppRouter />
      </NextUIProvider>
  );
}

export default App;
