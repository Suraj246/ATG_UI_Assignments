import { Container, Image, SplitButton } from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
const Categories = () => {
    return (
        <div className="mt-4">
            <Container fluid>
                <div className="category_section">
                    <div className="post_container">
                        <Nav variant="underline" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home" className="py-3 text-black fw-normal">All Posts</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" className="py-3 text-black fw-normal text-capitalize">article</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" className="py-3 text-black fw-normal text-capitalize">event</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" className="py-3 text-black fw-normal text-capitalize">education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="" className="py-3 text-black fw-normal text-capitalize">job</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="write_post_section">
                        <div className="write_post fw-semibold p-2 px-3">
                            <span>Write a Post</span>
                            <Image loading="lazy" src="darrow.png" alt="down arrow" className='darrow' />
                        </div>
                        <div className="write_post bg-primary p-2 text-white fw-semibold">
                            <Image src="humanGroup.png" alt="group" className='humanGroup' />
                            <span>Join Group</span>
                        </div>
                    </div>
                </div>
                <div className="filterALL_section">
                    <span className="fw-bold ">posts(345)</span>
                    <SplitButton
                        variant="secondary"
                        title="Filter: All"
                        id="dropdown-menu-align-responsive-2"
                    >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                    </SplitButton>
                </div>
            </Container>
        </div>
    )
}

export default Categories
