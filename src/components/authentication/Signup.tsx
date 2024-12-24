import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Form, Image } from 'react-bootstrap';
import { useState } from 'react';
import Login from './Login';
interface SignupProps {
    show: boolean;
    onHide: () => void;
}
const Signup: React.FC<SignupProps> = ({ onHide, show }) => {
    const [modalType, setModalType] = useState<string>('signup')
    return (
        <Modal
            show={show} onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            className='cancel_position'
        >
            <Image src='cancel.png' onClick={onHide} className=' cancelIcon' alt='cancel' loading='lazy' />

            {modalType === "signin" ?
                <Login setModalType={setModalType} />
                :

                <Modal.Body className='p-0 modalBody'>

                    <Modal.Title style={{ fontSize: "14px", color: "#008A45", backgroundColor: "#EFFFF4" }} className='text-center py-3 signup_highlight_text'>
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </Modal.Title>

                    <Container>
                        <Row className="modal_container">
                            <Col md={6}>
                                <h1 style={{ fontSize: "24px" }}
                                    className='mb-4'>Create Account
                                </h1>

                                <Form>
                                    <Row>
                                        <Col style={{ paddingRight: 0, margin: 0 }}>
                                            <Form.Group controlId="formFirstName" className='passwordEye'>
                                                <Form.Control type="text" placeholder="First Name" className='pass' />
                                            </Form.Group>
                                        </Col>
                                        <Col style={{ paddingLeft: 0 }}>
                                            <Form.Group controlId="formLastName" className='passwordEye'>
                                                <Form.Control type="text" placeholder="Last Name" className='pass' />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group controlId="formEmail" className='passwordEye'>
                                        <Form.Control type="email" placeholder="Email" className='pass' />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword" className='passwordEye'>
                                        <Form.Control type="password" placeholder="Password" className='pass' />
                                        <Image src="eye.png" alt="views" loading="lazy" className="passwordEyeIcon" />
                                    </Form.Group>
                                    <Form.Group controlId="formConfirmPassword" className='passwordEye' >
                                        <Form.Control type="password" placeholder="Confirm Password" className='pass' />

                                    </Form.Group>
                                    <div className="submit_div">
                                        <Button variant="primary" style={{ borderRadius: "30px" }} className='w-100 mt-4 mb-3' type="submit"> Create Account </Button>
                                        <span className='smallScreenSignIn text-decoration-underline mt-4 mb-3' onClick={() => setModalType("signin")} > or, signin </span>

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
                                </div>

                            </Col>
                            <Col >
                                <p className="create_account_image w-100 text-end"
                                    style={{ fontSize: "13px" }}>
                                    Already have an account?
                                    <span
                                        onClick={() => setModalType("signin")}
                                        style={{ color: "#008A45", fontWeight: 500 }}

                                    >Sign In</span>
                                </p>
                                <Image src="accountLogin.png" loading="lazy" alt="illustration" style={{ width: '100%' }} className='create_account_image' />
                                <p className="mt-3 w-100  privacy_text" style={{ fontSize: "11px" }}>
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                </p>
                            </Col>
                        </Row>
                    </Container>

                </Modal.Body>
            }

        </Modal>
    )
}

export default Signup
