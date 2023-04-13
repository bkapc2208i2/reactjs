import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProdCard from './ProdCard';

function ProductList(props) {
    return (
        <div className='product-list'>
            <h2 className='text-center py-5'>{props.title}</h2>
            <Container>
                <Row>
                    {
                        props.data.map((item, index) => {
                            return (
                                <Col key={item.id} lg={3} md={4} xs={6}>
                                    <ProdCard data={item}/>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </div>
    );
}

export default ProductList;