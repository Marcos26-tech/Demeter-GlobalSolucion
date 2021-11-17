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
  }

  let idAlimento = props.idReserva;
  let quantidade = props.quantidade;
  let estoque = props.estoque;

  const [novoalimento, setAlimento] = useState({
    idEstoque: estoque,
    idAlimento: idAlimento,
    quantidadeAlimentoReservado: quantidade,
    dataReservaAlimento: new Date().getTime(),
  });

  console.log(novoalimento);

  function reservaAlimento() {
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/reserva/reservar/${userCtx.idUsuario}`,
      {
        method: "post",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(novoalimento),
      }
    )
      .then(() => {
        alert("Alimento reservado com sucesso!");
      })
      .then(() => {
        // let idReserva = "";
        // let idUsuaria = null;
        // if (props.match.path.toLowerCase().includes("alimento")) {
        //   idUsuaria = props.match.params.idReserva;
        // }

        window.location.replace("/alimento/" + 2);
      });
  }

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
                      name="quantidadeAlimentoReservado"
                      onChange={digitacao}
                      placeholder="Edite a quantidade disponivel deste alimento"
                    />
                  </StyledQuestionario>
                </Section>
              </ModalBody>
              <ModalFooter>
                <FormButton3 onClick={() => sairModal()}>Sair</FormButton3>
                <FormButton2 onClick={() => reservaAlimento()}>
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
