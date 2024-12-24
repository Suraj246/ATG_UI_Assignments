import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const BackgroundImage = () => {
    return (
        <div className='large_image_container'>
            <Image loading="lazy" src='largeScreenImage.png' alt='image' className='largeScreenImage w-100' />
            <Image loading="lazy" src='smallScreenImage.png' alt='image' className='smallScreenImage w-100' />
            <div className='overlay'></div>
            <div className='overlay_joinGroup px-4'>
                <Image loading="lazy" src='arrow_back.png' alt='image' className='' style={{ width: "16px", height: "16px" }} />
                <Button className='text-white border' variant="outline-dark">Join Group</Button>
            </div>
            <div className='overlay_text'>
                <span className='overlay_text_heading'>Computer Engineering</span>
                <span className='overlay_span_text'>142.765 Computer Engineer follow this</span>
            </div>
        </div>
    )
}

export default BackgroundImage
