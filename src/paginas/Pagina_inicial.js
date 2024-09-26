import React from "react";
import Cartao_primario from "../cartoes/Cartao_primario";
import Icons from "../footer/Icons";
import Rodape from "../footer/Rodape";
import Cabeçalho from "../header/Cabeçalho";
import Cartao_primario_rodape from "../cartoes/Cartao_primario_rodape";
import { useNavigate } from "react-router-dom";
import Balao_do_whatsapp from "../botoes/Balao_do_whatsapp";
import {
  AneisVedacao,
  DefofoJei,
  DefofoSold,
  Injetada,
  IrrigaJei,
  IrrigaSold,
  LinhaMarrom,
} from "../dados/Dados";
import "../componentes/media/MediaPaginaPrincipal.css";
import Tabela from "../modal/Tabela";

export default function Pagina_inicial() {
  const navigate = useNavigate();
  function linkProdutos(dados) {
    navigate("/produtos", { state: { produtos: dados } });
  }

  return (
    <>
      <Cabeçalho
        imagem="/imagens-pagina-inicio/painel-principal.jpg"
        subtitulo="PEÇAS E ACESSÓRIOS EM PVC PARA SISTEMAS DE IRRIGAÇÃO"
      ></Cabeçalho>
      <div className="tudo">
        <Balao_do_whatsapp></Balao_do_whatsapp>
        <section>
          <div className="conteudo">
            <div className="container">
              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA INJETADA"
                  imagem="/imagens-pagina-inicio/linha-injetada.jpg"
                  cliqueProdutos={() => linkProdutos(Injetada)}
                  linkCatalagos="/pdf/linha-injetada.pdf"
                ></Cartao_primario>
              </div>
              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA IRRIGA SOLDÁVEL"
                  imagem="/imagens-pagina-inicio/linha-irriga-soldavel.jpg"
                  cliqueProdutos={() => linkProdutos(IrrigaSold)}
                  linkCatalagos="/pdf/irriga-sold.pdf"
                ></Cartao_primario>
              </div>

              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA IRRIGA JEI"
                  imagem="/imagens-pagina-inicio/linha-irriga-jei.jpg"
                  cliqueProdutos={() => linkProdutos(IrrigaJei)}
                  linkCatalagos="/pdf/irriga-jei.pdf"
                ></Cartao_primario>
              </div>

              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA DEFOFO JEI"
                  imagem="/imagens-pagina-inicio/linha-defofo-jei.jpg"
                  cliqueProdutos={() => linkProdutos(DefofoJei)}
                  linkCatalagos="/pdf/defofo-jei.pdf"
                ></Cartao_primario>
              </div>

              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA DEFOFO SOLDÁVEL"
                  imagem="/imagens-pagina-inicio/linha-defofo-soldavel.jpg"
                  cliqueProdutos={() => linkProdutos(DefofoSold)}
                  linkCatalagos="/pdf/defofo-soldavel.pdf"
                ></Cartao_primario>
              </div>

              <div className="cartao">
                <Cartao_primario
                  titulo="LINHA MRR CL20"
                  imagem="/imagens-pagina-inicio/linha-marrom.jpg"
                  cliqueProdutos={() => linkProdutos(LinhaMarrom)}
                  linkCatalagos="/pdf/linha-marrom.pdf"
                ></Cartao_primario>
              </div>

              <div className="cartao">
                <Cartao_primario
                  titulo="ANÉIS DE VEDAÇÃO"
                  imagem="/imagens-pagina-inicio/Aneis-de-vedacao.jpg"
                  cliqueProdutos={() => linkProdutos(AneisVedacao)}
                  linkCatalagos="/pdf/aneis-de-vedaçao.pdf"
                ></Cartao_primario>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="fundo">
            <div className="container-foot">
              <Cartao_primario_rodape
                titulo="CATÁLOGO - LINHA COMPLETA"
                imagem="/imagens-pagina-inicio/catalago-completo.jpg"
                link="/pdf/linha-completa.pdf"
              ></Cartao_primario_rodape>
              <Cartao_primario_rodape
                titulo="FICHA TÉCNICA LUVA DE CORRER"
                imagem="/imagens-pagina-inicio/ficha-tecnica.jpg"
                link="/pdf/luva-de-correr.pdf"
              ></Cartao_primario_rodape>
              <Cartao_primario_rodape
                titulo="REPRESENTANTES"
                imagem="/imagens-pagina-inicio/representantes.jpg"
                link="/pdf/representantes.pdf"
              ></Cartao_primario_rodape>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <Icons></Icons>
        <Rodape></Rodape>
      </footer>
    </>
  );
}
