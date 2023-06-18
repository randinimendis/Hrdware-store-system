import React from 'react'
import Heading from './Heading'
import ListButtons from './ListButtons'

export default function DeleteItem() {
  return (
    <div>
        <Heading tab='Delete Item'/>
        <ListButtons name='Delete' color="red"/>
    </div>
  )
}
