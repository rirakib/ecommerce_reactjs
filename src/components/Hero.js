import React from 'react'

export const Hero = ({Title}) => {
  return (
    <div className='container mt-5'>
        <div className='row align-items-center'>
            <div className='col-md-6'>
                <h2>{Title}</h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                </p>
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
                <img className='img-fluid' src="images/hero1.svg" style={{ maxHeight : '300px' }}/>
            </div>
        </div>
    </div>
  )
}
export default Hero;
