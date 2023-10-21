import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import './RightNav.module.css';
import sajek from '../../../assets/images/Sajek.png';
import sreemongol from '../../../assets/images/Sreemongol.png';
import sundorbon from '../../../assets/images/sundorbon.png';

const RightNav = () => {
    return (
        <div >
            <Row>
                <Col lg={4} sm={12} className='d-flex px-2'>
                    <Image src={sajek} width={270} height={416} className='rounded px-2' />
                </Col>
                <Col lg={4} sm={12} className='d-flex'>
                    <Image src={sreemongol} width={270} height={416} className='rounded px-2' />

                </Col>
                <Col lg={4} sm={12} className='d-flex'>
                    <Image src={sundorbon} width={270} height={416} className='rounded px-2' />
                </Col>
            </Row>
        </div>
    )
}

export default RightNav;