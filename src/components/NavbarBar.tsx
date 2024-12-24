import { Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Signup from './authentication/Signup';
import { useState } from 'react';


const NavbarBar = () => {
    const [modalShow, setModalShow] = useState<boolean>(false);
    return (
        <Navbar className='p-3  sticky-top bg-light'>
            <Container className=''>
                <Image loading="lazy" src="name.png" alt="company name" className='cname' />
                <Form className='search_Form'>
                    <Form.Control
                        type="text"
                        placeholder="Search for your favorite group in ATG"
                        className="search_field"
                    />
                    <Image src="search.png" alt="search" className='search_icon' />
                </Form>
                <div className='header_create_account_div'>
                    <div className='create_account' onClick={() => setModalShow(true)}>
                        <span>Create account.</span>
                        <span className='its_free_text'>it's free
                            <Image loading="lazy" src="darrow.png" alt="down arrow" className='darrow' />
                        </span>
                    </div>
                    <Signup
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <Image loading="lazy" src="Group.png" alt="dot" className='three_dot' />
                </div>
            </Container>
        </Navbar>
    )
}

export default NavbarBar
