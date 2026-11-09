interface SidebarProps {
  seccion: string;
  onCambiar: (nueva: string) => void;
}

function Sidebar({ seccion, onCambiar }: SidebarProps) {
  const pestanas: string[] = ["Personal", "Inventario", "Incidencias"];

  return (
    <nav>
      {pestanas.map((nombre) => (
        <button
          key={nombre}
          className={seccion === nombre ? "activo" : ""}
          onClick={() => onCambiar(nombre)}
        >
          {nombre}
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;
