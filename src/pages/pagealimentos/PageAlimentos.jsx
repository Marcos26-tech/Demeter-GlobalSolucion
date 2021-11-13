import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PageAlimentos() {

    let idMercado = "nao existe ainda"
    let idUsuario = 1

    // MÉTODO GET PARA ALIMENTOS
    const [alimentos, setAlimentos] = useState([])

    useEffect(() => {
        fetch("/rest/reserva").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setAlimentos(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])

        // MÉTODO GET PARA ALIMENTOS DE UM SUPERMERCADO ESPECIFICO (NÃO ESTÁ FUNCIONANDO AINDA)
        const [alimentosa, setAlimentosa] = useState([])

        useEffect(() => {
            fetch("/rest/reserva/alimentos" + idMercado).then((resp) => {
                return resp.json()
            }).then((resp) => {
                setAlimentosa(resp)
                console.log(resp)
            }).catch(error => {
                console.log(error)
            })
        }, [])





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
                                <td><Link title="editar" to="posso_ir_para_qualquer_lugar">Editar</Link>  |
                                    <button>Excluir </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default PageAlimentos