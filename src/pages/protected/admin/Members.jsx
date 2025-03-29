import React, { useContext } from 'react'
import { MembersContext } from '../../../contexts/MembersContext'
import ModalButton from '../partials/components/ModalButton'

const Members = () => {
const { members, loading } = useContext(MembersContext)

  return (
    <div id="members">
      {
        members.map(member => (
          <div key={member.id} className="page-header">
          <h1 className="h2"> {member.memberName} </h1>
          <ModalButton type="add" target="#addMemberModal" text="Add Member" />
        </div>
        ))
      }
    </div>
  )
}

export default Members