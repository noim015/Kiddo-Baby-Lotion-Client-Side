import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import Orders from '../Orders/Orders';



const MyOrders = () => {

    const { displayProducts } = useProducts();
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                const countOrders = data.count;
                setCount(countOrders);
            });
    }, []);

    

    const { AllContexts} = useAuth();
    const { user } = AllContexts;
    
    const matchingOrder = orders.filter((course) => course.userEmail === user.email);
    // const matchingProduct = displayProducts.find((course) => course._id === matchingOrder?.key);
    
    console.log(matchingOrder);
    
    return (
        <div className="container">
            <Row >
                 <h1>Ordered Items</h1>
             </Row>
            <Row>
            {matchingOrder?.map((course) => (
                    <Orders course={course} key={course._id}></Orders>
                ))}
            </Row>
            

        </div>
    );
};

export default MyOrders;