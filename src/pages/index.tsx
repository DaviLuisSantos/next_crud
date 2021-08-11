import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Davi', 69, "6"),
    new Cliente('Kid Bingo', 33, "3"),
    new Cliente('sexoman', 57, '4')

  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
  }
  function clienteExcluido(cliente: Cliente) {

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  function SalvarCliente(cliente: Cliente) {

    setVisivel('tabela')
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={SalvarCliente}
            cancelado={() => setVisivel('tabela')}
          ></Formulario>

        )}
        <>

        </>
      </Layout>
    </div>
  )
}
