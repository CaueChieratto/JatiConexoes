import React from "react";
import "../componentes/primeira-pagina/Aviso.css";

export default function Aviso() {
  return (
    <div className="tooltip-container-aviso">
      <div className="icon-aviso">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
        >
          <path
            fill="#E30000"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"
          ></path>
        </svg>
      </div>
      <div className="tooltip-aviso">
        <p>
          <span>
            ATENÇÃO AO GOLPE DO<br></br> BOLETO FALSO<br></br>
          </span>
          Golpistas estão ligando para os clientes informando que os boletos
          originais enviados pela Jati Conexões foram emitidos com valores
          errados, sem desconto. Em seguida enviam novos boletos com desconto,
          porém boletos falsos. Fiquem atentos e não efetuem o pagamento.
        </p>
      </div>
    </div>
  );
}
