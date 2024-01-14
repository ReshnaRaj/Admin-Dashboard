import React from 'react'
import { Total } from '../datatypes/Dtypes'

interface Container2Props{
    data:Total
}

const Container2:React.FC<Container2Props> = ({data}) => {
    console.log(data,"chartss")
  return (
    <div className="bg-gray-950  text-white p-4  rounded-lg shadow-md">
    <h3 className="text-xs font-semibold mb-2">Total Purchase </h3>
    <p className="text-lg font-normal text-center mb-4">{data.purchase?.credit} </p>
    <p className="text-lg font-normal text-center mb-4">{data.purchase?.cash} </p>
     
  </div>
  )
}

export default Container2