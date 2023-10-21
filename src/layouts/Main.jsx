import React from 'react';
import styles from './Main.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div className={`${styles.my_container} `} >
            <Header></Header>

            <div>
                <Row style={{ margin: '0' }}>
                    <Col lg={5}>Left nav</Col>
                    <Col lg={7}>Right nav</Col>

                </Row>
            </div>
        </div>
    )
}

export default Main;