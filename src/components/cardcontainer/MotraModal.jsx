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
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/estoque/${userCtx.idUsuario}`
    ).then((response) => response.json());
  }

  // var date = new Date("11/21/1987 16:00:00"); // some mock datevar milliseconds = date.getTime();

  let id = props.id;
  let quantidade = props.quantidadeAlimento;
  let validade = props.dataValidadeAlimento;

  // function formatDateToSequelize(date) {
  //   if (!date) return;
  //   return date.split("/").reverse().join("-");
  // }

  // let novaData = formatDateToSequelize(validade);
  // let novaData2 = novaData.getTime();

  const [novoalimento, setAlimento] = useState({
    quantidadeAlimento: quantidade,
    dataValidadeAlimento: validade,
  });

  console.log(novoalimento.dataValidadeAlimento);
  // console.log(dataFormatada);

  const editarAlimento = () => {
    fetch(
      `http://localhost:8080/DemeterGlobalSolution/rest/estoque/editar/${userCtx.idUsuario}/${id}`,
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

  // const [dia, mes, ano] = novoalimento.dataValidadeAlimento.split("/");
  // const dataFormatada = `${ano}-${mes}-${dia}`;

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
                      name="quantidadeAlimento"
                      onChange={digitacao}
                      placeholder="Edite a quantidade disponivel deste alimento"
                    />
                  </StyledQuestionario>
                  <StyledQuestionario>
                    <input
                      type="text"
                      name="dataValidadeAlimento"
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
