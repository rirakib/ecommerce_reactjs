import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({data}) => {
    return (
        <NavLink to={`singleproduct/${data.id}`} style={{ textDecoration:'none' }}>
                <div className="card">
                    <div className="img">
                        <img src={data.image} alt="{data.name}" className="img-fluid" style={{ maxHeight: '300px' }} />
                    </div>
                    <div className="card-body">
                        <p>{data.name} <span className='float-end'>{new Intl.NumberFormat().format(data.price)} Tk</span></p>

                    </div>
                </div>
        </NavLink>
    )
}

export default Product