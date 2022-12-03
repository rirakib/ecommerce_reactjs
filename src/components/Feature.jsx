import React from 'react'
import { ProductContext } from '../context/productContext'
import Product from './Product'

const Feature = () => {

    const {isLoading,feature} = ProductContext()
    
    

  return (

    
    <>
        <h3 className='text-center mb-2 mt-2'>Featured Product</h3>
        <div className='row'>
            {
                feature.map((item,ind)=> {
                    return (
                        <div className='col-md-4' key={ind}>
                            <Product data = {item} />
                        </div>
                    )
                })
            }
            
        </div>
    </>
  )
}

export default Feature

