import React from "react";
import "../componentes/segunda-pagina/Tabela.css";
import "../componentes/media/MediaTabelas.css";

export default function Tabela(props) {
  return (
    <div onClick={() => props.fecharTabela()} className="containerTabela">
      <button className="botaoFecharTabela">
        <span className="X"></span>
        <span className="Y"></span>
      </button>
      <div onClick={(e) => e.stopPropagation()} className="card">
        <div className="centroTabela">
          <div className="botoesTabela">
            <div
              className="nomeProdutoTabela"
              style={{
                backgroundColor: ["PN80", "IRR", "DFF", "PASTA"].includes(
                  props.valores[0].pn
                )
                  ? "#53A677" // verde
                  : props.valores[0].pn == "PN125"
                  ? "#0770B5" // azul
                  : "#856D57", // marrom
              }}
            >
              {props.subTitulo}
              {props.mostrarDescricao && (
                <>
                  <div className="descricao">SAÍDA C/ ROSCA INTERNA</div>
                </>
              )}
            </div>
            {props.pdf && (
              <>
                <div className="botaoFichaTecnica">
                  <a
                    target="_blank"
                    href={props.pdf}
                    className="fichaTecnica"
                    style={{
                      backgroundColor: ["PN80", "IRR", "DFF", "PASTA"].includes(
                        props.valores[0].pn
                      )
                        ? "#53A677" // verde
                        : props.valores[0].pn == "PN125"
                        ? "#0770B5" // azul
                        : "#856D57", // marrom
                    }}
                  >
                    FICHA TÉCNICA
                  </a>
                </div>
              </>
            )}
          </div>
          {props.valores.map((tabela) => (
            <div
              className="modal"
              key={
                tabela.pn +
                tabela.codigo +
                tabela.embalagem +
                tabela.peso +
                tabela.de +
                tabela.comp +
                tabela.de
              }
            >
              <div className="ajuste">
                <div
                  className="PN"
                  style={{
                    backgroundColor: ["PN80", "IRR", "DFF", "PASTA"].includes(
                      tabela.pn
                    )
                      ? "#53A677" // verde
                      : tabela.pn == "PN125"
                      ? "#0770B5" // azul
                      : "#856D57", // marrom
                    marginTop: ["PN80", "IRR", "DFF", "PASTA"].includes(
                      tabela.pn
                    )
                      ? "0"
                      : tabela.pn == "PN125"
                      ? "30px"
                      : "0",
                  }}
                >
                  {tabela.pn}
                </div>
                <div className="tabela">
                  <div
                    className="tituloTabela"
                    style={{
                      backgroundColor: ["PN80", "IRR", "DFF", "PASTA"].includes(
                        tabela.pn
                      )
                        ? "#53A677" // verde
                        : tabela.pn == "PN125"
                        ? "#0770B5" // azul
                        : "#856D57", // marrom
                    }}
                  >
                    <span
                      id="dn"
                      className={
                        tabela.dados[0].peso ? "colunaGrande" : "coluna"
                      }
                    >
                      DN
                    </span>
                    {tabela.dados[0].embalagem && (
                      <span
                        id="embalagem"
                        className={
                          tabela.dados[0].peso ? "colunaGrande" : "coluna"
                        }
                      >
                        EMBALAGEM
                      </span>
                    )}
                    <span
                      id="codigo"
                      className={
                        tabela.dados[0].peso ? "colunaGrande" : "coluna"
                      }
                    >
                      CÓDIGO
                    </span>
                    {tabela.dados[0].de && (
                      <span
                        id="DE"
                        className={
                          tabela.dados[0].peso ? "colunaGrande" : "coluna"
                        }
                      >
                        DE
                      </span>
                    )}
                    {tabela.dados[0].esp && (
                      <span
                        id="ESP"
                        className={
                          tabela.dados[0].peso ? "colunaGrande" : "coluna"
                        }
                      >
                        ESP
                      </span>
                    )}
                    {tabela.dados[0].comp && (
                      <span
                        id="COMP"
                        className={
                          tabela.dados[0].peso ? "colunaGrande" : "coluna"
                        }
                      >
                        COMP
                      </span>
                    )}
                    {tabela.dados[0].peso && (
                      <span
                        id="PESO"
                        className={
                          tabela.dados[0].peso ? "colunaGrande" : "coluna"
                        }
                      >
                        PESO
                      </span>
                    )}
                  </div>
                  {tabela.dados.map((linha, index) => (
                    <div
                      key={linha.dn + linha.embalagem + linha.codigo}
                      className="dadosTabelas"
                      style={{
                        backgroundColor:
                          index % 2 == 0
                            ? "#F5F6FA" // branco
                            : ["PN80", "IRR", "DFF", "PASTA"].includes(
                                tabela.pn
                              )
                            ? "#AADFBA" // verde
                            : tabela.pn == "PN125"
                            ? "#86C4E8" // azul
                            : "#DDD3C9", // marrom
                      }}
                    >
                      <span
                        className={
                          linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                        }
                      >
                        {linha.dn}
                      </span>
                      {linha.embalagem && (
                        <span
                          className={
                            linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                          }
                        >
                          {linha.embalagem}
                        </span>
                      )}
                      <span
                        className={
                          linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                        }
                      >
                        {linha.codigo}
                      </span>
                      {linha.de && (
                        <span
                          className={
                            linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                          }
                        >
                          {linha.de}
                        </span>
                      )}
                      {linha.esp && (
                        <span
                          className={
                            linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                          }
                        >
                          {linha.esp}
                        </span>
                      )}
                      {linha.comp && (
                        <span
                          className={
                            linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                          }
                        >
                          {linha.comp}
                        </span>
                      )}
                      {linha.peso && (
                        <span
                          className={
                            linha.peso ? "colunaTabelaGrande" : "colunaTabela"
                          }
                        >
                          {linha.peso}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
