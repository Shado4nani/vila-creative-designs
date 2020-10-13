import React from 'react';
import img1 from '../images/card1.jpg'
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = props =>{
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <Image src={img1} className="img-fluid" alt='Card_One'/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Kitchen</h4>
                <p className="card-text-secondary">
                    lorem
                </p>
                <a href="#" className="btn btn-outline-success">Discover</a>
            </div>
        </div>

    );
}

export default Cards;