interface ProductCardProps {
  titulo: string;
  precio: number;
  categoria: string;
  imagen: string;
}

function ProductCard({ titulo, precio, categoria, imagen }: ProductCardProps) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{categoria}</p>
      <p className="precio">{precio.toFixed(2)} $</p>

      {precio > 50 && <span className="alto-valor">Activo de Alto Valor</span>}
    </article>
  );
}

export default ProductCard;
