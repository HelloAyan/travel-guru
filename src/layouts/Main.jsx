import React from 'react';
import styles from './Main.module.css';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <Container fluid className={styles.my_container}>
            <h2>hello</h2>
        </Container>
    )
}

export default Main;