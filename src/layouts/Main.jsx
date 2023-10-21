import React from 'react';
import styles from './Main.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div className={`${styles.my_container} `} >
            <Header></Header>

            <div>
                <Row style={{ margin: '0' }}>
                    <Col lg={5}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={7} style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Main;