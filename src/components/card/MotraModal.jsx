import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent2021,
  ModalHeader,
  ModalBody,
  Container,
  Section,
  Span,
  StyledQuestionario,
  FormButton2,
  FormButton3,
  ModalFooter,
} from "../../assets/style/StyledModal";

function MostraModal(props) {
  const [show, setShow] = useState(false);

  function sairModal() {
    setShow(!show);
    window.location.replace("/editar");
  }

  let id = props.id;
  let nome = props.nome;
  let calorias = props.calorias;
  let receita = props.receita;

  const [novaReceita, setReceita] = useState({
    nomePrato: nome,
    kcal: calorias,
    receita: receita,
  });

  const editarReceita = () => {
    fetch("/rest/menu/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(novaReceita),
    }).then(() => {
      alert("Receita editada com sucesso!");
      sairModal();
    });
  };

  const digitacao = (e) => {
    setReceita({ ...novaReceita, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, [novaReceita]);

  return (
    <>
      {!show && (
        <Modal>
          <ModalContent2021>
            <ModalHeader>
              <Span>
                <h3>Editação das Receitas Panaceia Delicious</h3>
              </Span>
            </ModalHeader>

            <Container>
              <ModalBody>
                <Section>
                  <StyledQuestionario>
                    <input
                      type="text"
                      name="nomePrato"
                      onChange={digitacao}
                      placeholder="Edite o título da Receita"
                    />
                  </StyledQuestionario>
                  <StyledQuestionario>
                    <input
                      type="number"
                      name="kcal"
                      onChange={digitacao}
                      placeholder="Edite a quantidade de calorias desta receita"
                    />
                  </StyledQuestionario>
                  <StyledQuestionario>
                    <textarea
                      name="receita"
                      onChange={digitacao}
                      rows="4"
                      placeholder="Edite a receita aqui..."
                    />
                  </StyledQuestionario>
                </Section>
              </ModalBody>

              <ModalFooter>
                <FormButton3 onClick={() => sairModal()}>Sair</FormButton3>
                <FormButton2 onClick={() => editarReceita()}>
                  salvar
                </FormButton2>
              </ModalFooter>
            </Container>
          </ModalContent2021>
        </Modal>
      )}
    </>
  );
}
export default MostraModal;