import React, { useState } from "react";
import Cabeçalho from "../header/Cabeçalho";
import Icons from "../footer/Icons";
import Rodape from "../footer/Rodape";
import "../componentes/segunda-pagina/style.css";
import Cartao_secundario from "../cartoes/Cartao_secundario";
import Botao_de_voltar from "../botoes/Botao_de_voltar";
import { useLocation, useNavigate } from "react-router-dom";
import "../componentes/media/MediaProdutos.css";
import Tabela from "../modal/Tabela";

export default function Produtos() {
  const [abrirTabela, setAbrirTabela] = useState(false);
  const [produto, setProduto] = useState({});

  const mostrarTabela = (produto) => {
    setProduto(produto);
    setAbrirTabela(true);
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";
  };
  const fecharTabela = () => {
    setAbrirTabela(false);
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";
  };

  const location = useLocation();
  const { produtos } = location.state || {};

  const navigate = useNavigate();

  const voltar = () => {
    navigate("/");
  };

  return (
    <>
      <Cabeçalho
        imagem={produtos.imagem}
        subtitulo={produtos.subTitulo}
      ></Cabeçalho>
      <section className="section">
        <Botao_de_voltar voltar={voltar}></Botao_de_voltar>
        <div className="containerProdutos">
          {produtos.lista.map((produto) => (
            <Cartao_secundario
              key={produto.subTitulo + produto.titulo + produto.imagem}
              mostrarTabela={() => mostrarTabela(produto)}
              titulo={produto.titulo}
              subTitulo={produto.subTitulo}
              imagem={produto.imagem}
              patente={produto.patente}
            ></Cartao_secundario>
          ))}
        </div>
        {abrirTabela && (
          <Tabela
            fecharTabela={fecharTabela}
            subTitulo={produto.subTitulo}
            valores={produto.tabelas}
            mostrarDescricao={produto.mostrarDescricao}
            pdf={produto.pdf}
          ></Tabela>
        )}
      </section>
      <footer>
        <Icons></Icons>
        <Rodape></Rodape>
      </footer>
    </>
  );
}
