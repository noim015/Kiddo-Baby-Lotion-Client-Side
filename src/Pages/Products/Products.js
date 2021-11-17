import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {
    const { displayProducts } = useProducts();
    console.log(displayProducts);
    return (
        <div>
            <Container>
                <Row>
                    <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }}>Our Baby Care Lotions</h1>
                </Row>
                <Row>
                {displayProducts?.map((course) => (
                    <Product course={course} key={course.key}></Product>
                ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;