import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Header(props) {
    return (
        <header className='header' style={{padding: '10px 0'}}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <img style={{width: "100%"}} src="./images/logo.png" alt="" />
                    </Col>
                    <Col lg={9}>
                        <p>Hello</p>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;