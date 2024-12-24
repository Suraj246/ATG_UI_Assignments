import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';


interface modalProps {
    setModalType: (type: string) => void;
}

const Login: React.FC<modalProps> = ({ setModalType }) => {
    return (
        <Modal.Body className='p-0'>
            <Modal.Title style={{ fontSize: "14px", color: "#008A45", backgroundColor: "#EFFFF4" }} className='text-center py-3 signup_highlight_text'>
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </Modal.Title>
            <Container >
                <Row className="modal_container">
                    <Col md={6}>
                        <h1 style={{ fontSize: "24px" }} className='mb-4 text-capitalize'>sign in</h1>

                        <Form>

                            <Form.Group controlId="formEmail" className='passwordEye'>
                                <Form.Control type="email" placeholder="Email" className='pass' />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className='passwordEye'>
                                <Form.Control type="password" placeholder="Password" className='pass' />
                                <Image src="eye.png" alt="views" loading="lazy" className="passwordEyeIcon" />

                            </Form.Group>
                            <div className="submit_div">
                                <Button variant="primary" style={{ borderRadius: "30px" }} className='w-100 mt-4 mb-3' type="submit"> sign in</Button>
                                <span className='smallScreenSignIn text-decoration-underline mt-4 mb-3' onClick={() => setModalType("signup")} >or, Create Account  </span>

                            </div>
                        </Form>
                        <div className='d-grid'>
                            <Button variant="outline-primary" className="mt-2 fw-semibold"
                                style={{
                                    fontSize: "14px",
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: '0%',
                                    border: "1px solid #D9D9DB",
                                    color: "black"
                                }}>
                                <Image src='fb.png' alt='fb' loading='lazy' className='fbIcon'
                                    style={{ width: "16px" }}></Image>
                                <span>Sign up with Facebook</span>
                            </Button>
                            <Button variant="outline-danger" className="mt-2 fb_button"
                                style={{
                                    fontSize: "14px",
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: '0%',
                                    border: "1px solid #D9D9DB",
                                    color: "black"
                                }}>
                                <Image src='google.png' alt='fb' loading='lazy' className='fbIcon'
                                    style={{ width: "16px" }}></Image>
                                <span>Sign up with Google</span>
                            </Button>
                            <span className="mt-4 text-capitalize fw-semibold text-center mb-4" style={{ fontSize: "12px" }}> forgot password </span>
                        </div>

                    </Col>
                    <Col >
                        <p className="create_account_image w-100 text-end" style={{ fontSize: "13px" }}>
                            Don't have an account yet?
                            <span
                                style={{ color: "blue", fontWeight: 500 }}
                                onClick={() => setModalType("signup")}
                            >Create new for free!</span>
                        </p>
                        <Image src="accountLogin.png" loading="lazy" alt="illustration" style={{ width: '100%' }} className='create_account_image' />
                    </Col>
                </Row>
            </Container>


        </Modal.Body>

    )
}



export default Login
