import React, { useContext } from 'react'
import { MembersContext } from '../../../contexts/MembersContext'

const Members = () => {
const { members, loading } = useContext(MembersContext)

  return (
    <div>
      {
        members.map(member => (
          <div key={member.id}> {member.memberName} </div>
        ))
      }
    </div>
  )
}

export default Members