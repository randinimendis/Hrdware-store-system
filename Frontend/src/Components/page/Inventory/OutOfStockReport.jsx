import React from 'react'
import Heading from './Heading'
import StockReport from './StockReport'
import EmptyStockReport from './EmptyStockReport'

export default function OutOfStockReport() {
  return (
    <div>
      <Heading tab="Empty Stock Report"/>
      <EmptyStockReport/>
      
    </div>
  )
}
