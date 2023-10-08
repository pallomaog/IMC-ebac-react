import { useState } from "react";

import styles from "./Formulario.module.css";

const Formulario = () => {
  const [bodyWeigth, setBodyWeigth] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const calculaIMC = () => {
    if (Number(bodyWeigth) != 0 && Number(bodyHeight) != 0) {
      const indice = Number(bodyWeigth) / (Number(bodyHeight) / 100) ** 2;
      if (indice < 18.5) {
        return (
          <p className={styles.indexResult}>
            O seu IMC deu {indice.toFixed(1)}, ou seja, Magreza<br></br>
            Para quaisquer duvidas, acesse esse site <a href="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/o-que-o-indice-de-massa-corporal-imc-diz-sobre-sua-saude" target="_blank"> aqui </a>
          </p>
        );
      } else if (indice < 25) {
        return (
          <p className={styles.indexResult}>
            O seu IMC deu {indice.toFixed(1)}, ou seja, Normal<br></br>
            Para quaisquer duvidas, acesse esse site <a href="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/o-que-o-indice-de-massa-corporal-imc-diz-sobre-sua-saude" target="_blank"> aqui </a>
          </p>
        );
      } else if (indice < 30) {
        return (
          <p className={styles.indexResult}>
            O seu IMC deu {indice.toFixed(1)}, ou seja, Sobrepeso<br></br>
            Para quaisquer duvidas, acesse esse site <a href="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/o-que-o-indice-de-massa-corporal-imc-diz-sobre-sua-saude" target="_blank"> aqui </a>
          </p>
        );
      } else if (indice < 40) {
        return (
          <p className={styles.indexResult}>
            O seu IMC deu {indice.toFixed(1)}, ou seja, Obesidade<br></br>
            Para quaisquer duvidas, acesse esse site <a href="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/o-que-o-indice-de-massa-corporal-imc-diz-sobre-sua-saude" target="_blank"> aqui </a>
          </p>
        );
      } else {
        return (
          <p className={styles.indexResult}>
            O seu IMC deu {indice.toFixed(1)}, ou seja, Obesidade grave<br></br>
            Para quaisquer duvidas, acesse esse site <a href="https://www.tjdft.jus.br/informacoes/programas-projetos-e-acoes/pro-vida/dicas-de-saude/pilulas-de-saude/o-que-o-indice-de-massa-corporal-imc-diz-sobre-sua-saude" target="_blank"> aqui </a>
          </p>
        );
      }
    }
  };

  return (
    <>
      <div className="container">
        <h1>Calculadora IMC</h1>
        <form onSubmit={(evento) => evento.preventDefault()}>
          <p class="descricao">O IMC é reconhecido como padrão internacional para avaliar o grau de sobrepeso e obesidade. É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros)</p>
          <label htmlFor="altura">Altura (em cm)</label>
          <input
            className={styles.inputValue}
            type="number"
            placeholder="Exemplo: 165"
            min={0}
            onChange={({ target }) => setBodyHeight(Number(target.value))}
          />
          <label htmlFor="">Peso (kg)</label>
          <input
            className={styles.inputValue}
            type="number"
            placeholder="Exemplo: 42"
            min={0}
            onChange={({ target }) => setBodyWeigth(Number(target.value))}
          />
          {calculaIMC()}

        </form>
        </div>
    </>
  );
};

export default Formulario;
