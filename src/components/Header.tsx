import { useState } from "react";
import logo_aranha_corp from "../assets/logo_aranha_corp.png";

function Header() {
  const [hora, setHora] = useState(() => new Date().toLocaleTimeString());

  // Creamos un interval para actualizar la hora cada segundo
  setInterval(() => {
    setHora(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <header>
      <div className="marca">
        <img src={logo_aranha_corp} alt="Logo de Aranha Corp" />
        <span>Aranha Corp</span>
      </div>
      <time>{hora}</time>
    </header>
  );
}

export default Header;
