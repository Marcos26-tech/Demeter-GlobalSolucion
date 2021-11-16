import { React, useState, useEffect } from 'react'

function PageTodosAlimentos(props) {

    let idMercado = ""
    if (props.match.path.toLowerCase().includes('alimentos')) {
        idMercado = props.match.params.id
        console.log("id é: " + idMercado)

    }

    // MÉTODO GET PARA ALIMENTOS
    const [alimentos, setAlimentos] = useState([])

    useEffect(() => {
        fetch("/rest/reserva/alimentos/" + idMercado).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setAlimentos(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    // MÉTODO GET PARA ALIMENTOS DE UM SUPERMERCADO ESPECIFICO (NÃO ESTÁ FUNCIONANDO AINDA)
    // const [alimentosa, setAlimentosa] = useState([])

    // useEffect(() => {
    //     fetch("/rest/reserva/alimentos" + idMercado).then((resp) => {
    //         return resp.json()
    //     }).then((resp) => {
    //         setAlimentosa(resp)
    //         console.log(resp)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }, [])

    const [reservaFeita, setReservaFeita] = useState(false)

    function reservar(idAlimento, nomeAlimento) {
        setReservaFeita(!reservaFeita)
    }
    function confirmacaoReserva(idAlimento, nomeAlimento) {
        var qtd = document.getElementById("quantidadeReservada").value
        alert(qtd + " " + nomeAlimento + " add ao carrinho!")
        console.log(idAlimento + "/" + nomeAlimento)

    }

    return (
        <div>
            <div>
                <h1>Lista de Alimentos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Qtd</th>
                            <th>Nome</th>
                            <th>Data de Validade</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alimentos.map((alimento) => (
                            <tr key={alimento.idAlimento}>
                                <td>{alimento.quantidadeAlimento}</td>
                                <td>{alimento.nomeAlimento}</td>
                                <td>{alimento.dataValidadeAlimento}</td>
                                <button onClick={() => reservar()}>RESERVAR</button>

                                {/* ISSO AQUI PODE SER UM MODAL COM IMAGEM, NOME E SETAR A QTD DE UM PRODUTO ESPECIFICO*/}
                                {reservaFeita && (
                                    <>
                                    <label for="qtd"></label>
                                        <input type="number" name="qtd" min="0" placeholder="quantidade" id="quantidadeReservada"/>
                                        <button onClick={() => confirmacaoReserva(alimento.idAlimento, alimento.nomeAlimento)}>CONFIRMAR RESERVA</button>
                                        <button onClick={() => setReservaFeita(!reservaFeita)}>CANCELAR</button>
                                    </>
                                )}
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PageTodosAlimentos