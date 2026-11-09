interface IncidentCardProps {
  id: number;
  titulo: string;
  completada: boolean;
}

function IncidentCard({ id, titulo, completada }: IncidentCardProps) {
  return (
    <article className={completada ? "tarjeta resuelta" : "tarjeta pendiente"}>
      <div className="icono">{completada ? "✔" : "!"}</div>
      <div>
        <h3>Incidencia #{id}</h3>
        <p>{titulo}</p>
        <strong>{completada ? "Resuelta" : "Pendiente"}</strong>
      </div>
    </article>
  );
}

export default IncidentCard;
