import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Slides } from './components/Slide';
import { Container } from 'react-bootstrap';


export const Home = () => (  
    <div>
        
        <Container className="w-100 p-3">
            <h2>Home</h2>
            <Slides/>
        </Container>
    </div>

)