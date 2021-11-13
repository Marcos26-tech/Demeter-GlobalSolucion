import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function PageMercados(props) {

    let idUsuario = ""
    if (props.match.path.toLowerCase().includes('mercados')) {
        idUsuario = props.match.params.id
        console.log("id: " + idUsuario)
        alert(idUsuario)
    }
    // MÉTODO GET PARA MERCADOS
    const [mercados, setMercados] = useState([])

    useEffect(() => {
        fetch("/rest/reserva/" + idUsuario).then((resp) => {
            return resp.json()
        }).then((resp) => {
            setMercados(resp)
            console.log(resp)
        }).catch(error => {
            console.log(error)
        })
    }, [])


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





    return (
        <div>

            <div>
                <h1>Lista de Mercados</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>CNPJ</th>
                            <th>Razão Social</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mercados.map((mercado) => (
                            <tr key={mercado.idUsuario}>
                                <td>{mercado.cnpjUsuario}</td>
                                <td>{mercado.razaoSocial}</td>
                                {/* NA LINHA ABAIXO TEREMOS QUE PEGAR O ID DO ESTOQUE DO MERCADO */}
                                <td><Link title="estoque-mercado" to={`/alimentos/${mercado.idUsuario}`}>Acessar</Link>  |
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

export default PageMercados
