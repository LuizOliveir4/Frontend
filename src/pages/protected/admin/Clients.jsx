import React, { useContext } from 'react'
import { ClientsContext } from '../../../contexts/ClientsContext'
import ModalButton from '../partials/components/ModalButton'

const Clients = () => {
const { clients, loading } = useContext(ClientsContext)

  return (
    <div className="clients">
      {
        clients.map(client => (
          <div key={client.id} className="page-header">
          <h1 className="h2">{client.clientName}</h1>
          <ModalButton type="add" target="#addClientModal" text="Add Client" />
        </div>
        ))
      }
    </div>
  )
}

export default Clients