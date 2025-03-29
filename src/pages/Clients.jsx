import React, { useContext } from 'react'
import ModalButton from '../partials/components/ModalButton'
import { ClientsContext } from '../contexts/ClientsContext'

const Clients = () => {
    const { clients, loading } = useContext(ClientsContext)
  return (
    <div id="clients">
      <div className="page-header">
        <h1 className="h2">Clients</h1>
        <ModalButton type="add" target="#addClientModal" text="Add Client" />
      </div>
      {
        clients.map(client => (
          <div key={client.id}> {client.clientName} </div>
        ))
      }
    </div>
  )
}

export default Clients