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

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

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
      .then((response) => response.json())
      .then((data) => {
        // let result = response.json();
        console.log(data);
        if (data === true) {
          setStatus({
            type: "success",
            mensagem: "Alimento reservado com sucesso!",
          });
          // window.location.replace("/alimento/" + 2);
        } else {
          setStatus({
            type: "error",
            mensagem: "Erro ao reservar o alimento, estoque insuficiente!",
          });
        }
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
            {status.type === "success" ? (
              <p style={{ color: "#033d11" }}>{status.mensagem}</p>
            ) : (
              ""
            )}
            {status.type === "error" ? (
              <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
            ) : (
              ""
            )}

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
