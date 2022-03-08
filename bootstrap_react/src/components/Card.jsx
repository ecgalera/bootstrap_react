import React from 'react'
import image1 from '../assets/image1.jpg'


const Card = () => {
    return (

        <div className='card text-center bg-dark'>
            <img src={image1} alt="" />
            <div className='card-body text-light'>
                <h4 className='card-title'>Mi Titulo </h4>
                <h5 className='card-text text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolor sapiente tempora numquam neque nam pariatur sequi obcaecati, qui rem, modi placeat. Ipsa numquam doloribus consequuntur nobis ducimus soluta nemo.</h5>
                <a href="#!" className='btn btn-outline-secondary rounded-0 '>
                    Go to this website
                </a>
            </div>
        </div>
    )
}

export default Card