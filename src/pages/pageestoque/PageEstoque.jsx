import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PageEstoque() {

    let idUsuario = 0

    // MÉTODO GET
    const [estoques, setEstoques] = useState([])

    useEffect(() => {
        fetch("/rest/estoque/" + idUsuario).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setEstoques(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])


    // State que auxilia na criação de um novo usuário (POST)
    let id = ""

    const [novoAlimento, setNovoAlimento] = useState({
        quantidadeAlimento: "",
        idAlimento: "",
        nomeAlimento: "",
        dataValidadeAlimento: "",
        idEstoque: ""
    })



    // MÉTODO POST
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/estoque/cadastrar/" + idUsuario, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(novoAlimento)
        }).then(() => {
            window.location = "/caminho_para_pagina_de_estoque"
        })
    }

    // MÉTODO PUT
    const handleChange = (e) => {
        setNovoAlimento({ ...novoAlimento, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div>
                <h1>Lista de Usuários</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID ESTOQUE</th>
                            <th>Qtd</th>
                            <th>Nome</th>
                            <th>Data de Validade</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estoques.map((estoque) => (
                            <tr key={estoque.idAlimento}>
                                <td>{estoque.idEstoque}</td>
                                <td>{estoque.quantidadeAlimento}</td>
                                <td>{estoque.nomeAlimento}</td>
                                <td>{estoque.dataValidadeAlimento}</td>
                                <td><Link title="editar" to={`editar/${idUsuario}/${estoque.idAlimento}`}>Editar Alimento</Link>  |
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

export default PageEstoque
