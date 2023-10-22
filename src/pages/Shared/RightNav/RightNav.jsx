import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import './RightNav.module.css';
import sajek from '../../../assets/images/Sajek.png';
import sreemongol from '../../../assets/images/Sreemongol.png';
import sundorbon from '../../../assets/images/sundorbon.png';

const RightNav = () => {
    return (
        <div style={{ width: '900px', height: 'auto' }}>
            <Row style={{ width: '900px', height: 'auto', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                <Col lg={4} sm={12} className=' p-2'>
                    <Image src={sajek} width={270} height={416} className='rounded ' />
                </Col>
                <Col lg={4} sm={12} className=' p-2' >
                    <Image src={sreemongol} width={270} height={416} className='rounded ' />

                </Col>
                <Col lg={4} sm={12} className=' p-2'>
                    <Image src={sundorbon} width={270} height={416} className='rounded ' />
                </Col>
            </Row>

            <div className='d-flex'>
                <div className='pe-4'> <FaRegArrowAltCircleLeft size="2em"></FaRegArrowAltCircleLeft> </div>
                <div> <FaRegArrowAltCircleRight size="2em" ></FaRegArrowAltCircleRight> </div>

            </div>
        </div >
    )
}

export default RightNav;