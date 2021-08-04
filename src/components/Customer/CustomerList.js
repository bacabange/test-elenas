import React from 'react'
import CustomerItem from './CustomerItem'

const CustomerList = ({data}) => {
  return (
    <div className="space-y-4">
      {data.map(customer => <CustomerItem {...customer} key={`customer-${customer.id}`} />)}
    </div>
  )
}

export default CustomerList
