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
                        <h1>TRAIN WITH THE BEST PERSONAL TRAINER</h1>
                        <p>USE OUR EXPERIENCE TO ACHIEVE THE MIND AND BODY YOU DESERVE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight:'700px'}}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>TRAIN WITH THE BEST PERSONAL NUTRITIONIST</h1>
                        <p>USE OUR EXPERIENCE TO ACHIEVE THE PHYSIQUE YOU DESERVE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{maxHeight:'700px'}}>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>TRAIN WITH THE BEST PERSONAL MOTIVATOR</h1>
                        <p>USE OUR EXPERIENCE TO ACHIEVE THE MUSCLE YOU DESERVE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;