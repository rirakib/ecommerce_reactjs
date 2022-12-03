import React from 'react'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Services from './components/Services'
import { ProductContext } from './context/productContext'

export const Home = () => {
 
  const aa = ProductContext()
  console.log(aa)
  
  return (
    <div>
   
        <Hero Title = {'This is awesome'}/>
        <Services />
        
        <div className='container mt-5'>
          
          <Feature />
        </div>
    </div>
  )
}
export default Home