import React from "react";
import jojo from "../../assets/img/grupo/jonathan.jpg";
import marcos from "../../assets/img/grupo/maciel.jpg";
import marcao from "../../assets/img/grupo/marcos.jpg";
import akemi from "../../assets/img/grupo/akemi.jpg";
import cris from "../../assets/img/grupo/cris.jpg";
import { StyleContainer, Box, Paragrafo } from "./StyleSobre";

function PageSobreNos() {
  return (
    <>
      <StyleContainer>
        <div>
          <Paragrafo>
            Neste projeto, usando a tecnologia como o meio para mitigar um
            problema cada vez mais visível em nossa sociedade capitalista a
            fome. Através de uma solução que conecta supermercados a entidade
            assistenciais, a fim de diminuir o desperdício de alimentos próximos
            do vencimento e combater a fome.
          </Paragrafo>
          <Paragrafo>
            Fisicamente, habitamos um espaço, mas, sentimentalmente, somos
            habitados por uma memória. O que a memória ama fica eterno. Afinal o
            passado não reconhece seu lugar: está sempre presente. Mário
            Quintana - José Saramago - Adélia Prado
          </Paragrafo>
          <Paragrafo>
            Somos amigos e estudantes universitários  do curso de Análise e
            Desenvolvimento de Sistemas pela FIAP.
          </Paragrafo>
        </div>
        <Box>
          <div>
            <img src={jojo} alt="Jonathan Felix"></img>
            <h2>
              <a
                href="https://www.linkedin.com/in/jonathan-felix-12a9881a0/"
                target="_blank"
                rel="noreferrer"
              >
                Jonathan Felix
              </a>
            </h2>
            <h3>Rm89352</h3>
            <p>Full Stack</p>
          </div>
          <div>
            <img src={cris} alt="Cristine Acocella"></img>
            <h2>
              <a
                href="https://www.linkedin.com/in/cristine-acocella-a4248168/"
                target="_blank"
                rel="noreferrer"
              >
                Cristine Acocella
              </a>
            </h2>
            <h3>Rm88251</h3>
            <p>Full Stack</p>
          </div>
          <div>
            <img src={marcos} alt="Marcos Maciel"></img>
            <h2>
              <a
                href="https://www.linkedin.com/in/markomaciell/"
                target="_blank"
                rel="noreferrer"
              >
                Marcos Maciel
              </a>
            </h2>
            <h3>Rm88267</h3>
            <p>Full Stack</p>
          </div>
          <div>
            <img src={marcao} alt="Marcos Vinicius"></img>
            <h2>
              <a
                href="https://www.linkedin.com/in/marcosvmferreira/"
                target="_blank"
                rel="noreferrer"
              >
                Marcos Vinicius
              </a>
            </h2>
            <h3>Rm86904</h3>
            <p>Full Stack</p>
          </div>
          <div>
            <img src={akemi} alt="Akemi"></img>
            <h2>
              <a
                href="https://www.linkedin.com/in/vitoria-akemi-tanimura-69561a1b2/"
                target="_blank"
                rel="noreferrer"
              >
                Vitória Akemi
              </a>
            </h2>
            <h3>Rm88077</h3>
            <p>Full Stack</p>
          </div>
        </Box>
      </StyleContainer>
    </>
  );
}
export default PageSobreNos;
