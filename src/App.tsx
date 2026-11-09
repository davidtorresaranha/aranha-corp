import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Personal from "./views/Personal";
import Inventario from "./views/Inventario";
import Incidencias from "./views/Incidencias";
import "./styles/estilos.css";

function App() {
  const [seccion, setSeccion] = useState<string>("Personal");

  return (
    <div className="app">
      <Header />
      <div className="cuerpo">
        <Sidebar seccion={seccion} onCambiar={setSeccion} />
        <main id="panel_central">
          {seccion === "Personal" && <Personal />}
          {seccion === "Inventario" && <Inventario />}
          {seccion === "Incidencias" && <Incidencias />}
        </main>
      </div>
    </div>
  );
}

export default App;
