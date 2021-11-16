import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../store/user-context";

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
  const userCtx = useContext(UserContext);

  const [show, setShow] = useState(false);

  function sairModal() {
    setShow(!show);
    fetch("http://localhost:8080/DemeterGlobalSolution/rest/estoque/"`${userCtx.idUsuario}`
    )
      .then((response) => response.json()
    );
  }

  let id = props.idAlimento;
  let quantidade = props.quantidadeAlimento;
  let validade = props.dataValidadeAlimento;

  const [novoalimento, setAlimento] = useState({
    quantidade: quantidade,
    validade: validade,
  });

  const editarAlimento = () => {
    fetch("/rest/estoque/editar/"`${userCtx.idUsuario}/${id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoalimento),
      }
    ).then(() => {
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
                <FormButton2 onClick={() => editarAlimento()}>salvar</FormButton2>
              </ModalFooter>
            </Container>
          </ModalContent2021>
        </Modal>
      )}
    </>
  );
}
export default MostraModal;
