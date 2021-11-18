import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item style={{maxHeight:'700px'}}>
                    <img style={ { width:'100%' } }
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Gentle for Babies, and the Planet</h1>
                        <p>we're always pushing ourselves to improve - our products</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight:'700px'}}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Get personalized tips & tricks for you and your little one</h1>
                        <p>Get personalized tips & tricks for you and your little one
delivered to your inbox</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight:'700px'}}>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Baby skin is super sensitive</h1>
                        <p>Baby skin is super sensitive, and it takes gentle products to do the job right.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;