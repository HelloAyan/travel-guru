import React from 'react';
import styles from './Main.module.css';
import { Container } from 'react-bootstrap';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <Container fluid className={`${styles.my_container} `} >
            <Header></Header>
        </Container>
    )
}

export default Main;