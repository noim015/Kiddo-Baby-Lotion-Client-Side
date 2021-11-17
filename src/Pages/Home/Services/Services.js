import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Course from '../../Product/Product';
import './Services.css';

const Services = () => {
    
    const { displayProducts } = useProducts();
    
return (
    <div>
        <Container>
            <Row>
                <h1 style={{ fontSize:'45px', textAlign: 'center', padding: '25px 0' }} >Our Baby Care Lotions</h1>
            </Row>
            <Row>
            {displayProducts?.slice(0,6).map((course) => (
                <Course course={course} key={course._id}></Course>
                
            ))}
            </Row>
        </Container>
    </div>
);
};

export default Services;