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
  let quantidade = props.quantidade;
  let validade = props.validade;

  const [novoalimento, setAlimento] = useState({
    nomeAlimento: nome,
    quantidade: calorias,
  });

  const editarAlimento = () => {
    fetch("/rest/menu/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(novoalimento),
    }).then(() => {
      alert("Alimento editada com sucesso!");
      sairModal();
    });
  };

  const digitacao = (e) => {
    setAlimento({ ...novoalimento, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, [novoalimento]);

  return (
    <>
      {!show && (
        <Modal>
          <ModalContent2021>
            <ModalHeader>
              <Span>
                <h3>Editação do estoque dos Alimentos</h3>
              </Span>
            </ModalHeader>

            <Container>
              <ModalBody>
                <Section>
                  <StyledQuestionario>
                    <input
                      type="text"
                      name="nomeAlimenbto"
                      onChange={digitacao}
                      placeholder="Edite o nome do alimento"
                    />
                  </StyledQuestionario>
                  <StyledQuestionario>
                    <input
                      type="number"
                      name="quantidade"
                      onChange={digitacao}
                      placeholder="Edite a quantidade disponivel deste alimento"
                    />
                  </StyledQuestionario>
                  <StyledQuestionario>
                    <input
                      type="data"
                      name="validade"
                      onChange={digitacao}
                      placeholder="Edite a data de validade do alimento"
                    />
                  </StyledQuestionario>
                </Section>
              </ModalBody>

              <ModalFooter>
                <FormButton3 onClick={() => sairModal()}>Sair</FormButton3>
                <FormButton2 onClick={() => editarAlimento()}>
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