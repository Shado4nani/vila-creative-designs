import React from 'react';
// import { Carousel } from 'react-bootstrap';
import { Slides } from './components/Slide';
import InfoGrids from './components/InfoGrid';
import { Container, Row, Col } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';

export const Home = () => (  
    <div>
        
        <Container maxWidth="xs">
            <Slides/>
            <Divider/>
            <InfoGrids/>
        </Container>
        
    </div>

)