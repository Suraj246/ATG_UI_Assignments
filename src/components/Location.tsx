import React, { useState } from 'react';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';

const LocationComponent: React.FC = () => {
    const [location, setLocation] = useState<string>('Noida, India');

    return (
        <Container className=''>
            <Row className="align-items-center  p-3">

                <Col className=' input_location'>
                    <Image src="location.png" alt="location" loading="lazy" className="input_locationIcon"></Image>
                    <Form.Control
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className=" border-bottom border-dark border-0"
                    />
                </Col>
                <Col xs={1}>
                    <Image src="edit.png" alt="edit" loading="lazy" className="location"></Image>
                </Col>
            </Row>
            <div className='d-flex gap-2 mt-4 align-items-start'>
                <Image src="error.png" alt="edit" loading="lazy" className="error mt-1"></Image>
                <p style={{ fontSize: "12px" }}>Your location will help us serve better and extend a personalised experience.</p>
            </div>
        </Container>
    );
};

export default LocationComponent;
