import React from 'react'
import Heading from './Heading'
import EditForm from './EditForm'

export default function EditItem() {
  return (
    <div>
      <Heading tab='EditItem'/>
      <EditForm name='Edit'/>
    </div>
  )
}
