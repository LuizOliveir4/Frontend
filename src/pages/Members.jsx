import React, { useContext } from 'react'
import ModalButton from '../partials/components/ModalButton'
import { MembersContext } from '../contexts/MembersContext'

const Members = () => {
  const { members, loading } = useContext(MembersContext)
  return (
    <div id="members">
      <div className="page-header">
        <h1 className="h2">Team Members</h1>
        <ModalButton type="add" target="#addMemberModal" text="Add Member" />
      </div>
      {
        members.map(member => (
          <div key={member.id}> {member.memberName} </div>
        ))
      }
    </div>
  )
}

export default Members