interface EmployeeCardProps {
  nombre: string;
  correo: string;
  ciudad: string;
}

function EmployeeCard({ nombre, correo, ciudad }: EmployeeCardProps) {
  return (
    <article className="tarjeta">
      <h3>{nombre}</h3>
      <p>{correo}</p>
      <p>{ciudad}</p>
    </article>
  );
}

export default EmployeeCard;
