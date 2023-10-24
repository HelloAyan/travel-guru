import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const LeftNav = () => {
    return (
        <Container className='pt-5'>
            <h1>Cox's bazar</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <Button variant="warning">Booking <FaArrowRight style={{ color: 'black' }}></FaArrowRight></Button>
        </Container>
    )
}

export default LeftNav;