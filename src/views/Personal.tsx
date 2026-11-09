import { useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

interface Empleado {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

function Personal() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [busqueda, setBusqueda] = useState<string>("");

  const cargarEmpleados = async (): Promise<void> => {
    setCargando(true);
    setError("");
    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }

      const datos: Empleado[] = await respuesta.json();
      setEmpleados(datos);
    } catch {
      setError("No se han podido cargar los datos");
    } finally {
      setCargando(false);
    }
  };

  const empleadosFiltrados = empleados.filter((emp) =>
    emp.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section>
      <h2>Personal</h2>

      <button onClick={cargarEmpleados} disabled={cargando}>
        Cargar datos
      </button>

      {empleados.length > 0 && (
        <input
          type="search"
          placeholder="Buscar empleado por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      )}

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="error">{error}</p>}

      <div className="rejilla">
        {empleadosFiltrados.map((emp) => (
          <EmployeeCard
            key={emp.id}
            nombre={emp.name}
            correo={emp.email}
            ciudad={emp.address.city}
          />
        ))}
      </div>

      {empleados.length > 0 && empleadosFiltrados.length === 0 && (
        <p className="mensaje">Ningún empleado coincide con «{busqueda}».</p>
      )}
    </section>
  );
}

export default Personal;
