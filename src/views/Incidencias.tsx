import { useState } from "react";
import IncidentCard from "../components/IncidentCard";

interface Incidencia {
  id: number;
  title: string;
  completed: boolean;
}

function Incidencias() {
  const [incidencias, setIncidencias] = useState<Incidencia[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const cargarIncidencias = async (): Promise<void> => {
    setCargando(true);
    setError("");
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=8",
      );

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }

      const datos: Incidencia[] = await respuesta.json();
      setIncidencias(datos);
    } catch {
      setError("No se han podido cargar los datos");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section>
      <h2>Incidencias</h2>

      <button onClick={cargarIncidencias} disabled={cargando}>
        Cargar datos
      </button>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="error">{error}</p>}

      <div className="rejilla">
        {incidencias.map((inc) => (
          <IncidentCard
            key={inc.id}
            id={inc.id}
            titulo={inc.title}
            completada={inc.completed}
          />
        ))}
      </div>
    </section>
  );
}

export default Incidencias;
