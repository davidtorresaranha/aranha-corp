import { useState } from "react";
import ProductCard from "../components/ProductCard";

interface Activo {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

function Inventario() {
  const [activos, setActivos] = useState<Activo[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const cargarActivos = async (): Promise<void> => {
    setCargando(true);
    setError("");
    try {
      const respuesta = await fetch(
        "https://fakestoreapi.com/products?limit=6",
      );

      if (!respuesta.ok) {
        throw new Error(`Error en el servidor: ${respuesta.status}`);
      }

      const datos: Activo[] = await respuesta.json();
      setActivos(datos);
    } catch {
      setError("No se han podido cargar los datos");
    } finally {
      setCargando(false);
    }
  };

  return (
    <section>
      <h2>Inventario</h2>

      <button onClick={cargarActivos} disabled={cargando}>
        Cargar datos
      </button>

      {cargando && <p className="mensaje">Cargando datos del servidor…</p>}
      {error && <p className="error">{error}</p>}

      <div className="rejilla">
        {activos.map((activo) => (
          <ProductCard
            key={activo.id}
            titulo={activo.title}
            precio={activo.price}
            categoria={activo.category}
            imagen={activo.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Inventario;
