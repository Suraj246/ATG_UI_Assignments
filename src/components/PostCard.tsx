import { Button, Card, Dropdown, Image } from "react-bootstrap"
import { PostDataTypes } from "./PostContainer";

interface PostCardProps { item: PostDataTypes; }

const PostCard: React.FC<PostCardProps> = ({ item }) => {
    return (
        <Card className="w-100 p-0" >
            {
                item.post_image && <Card.Img variant="top" src={item.post_image} className=" post_img" />
            }
            <Card.Body>
                <div className="category_title_div ">
                    <Card.Img loading="lazy" src={item.category_image} className="title_img" />
                    <Card.Title className="card_category_title text-capitalize">{item.category}</Card.Title>
                </div>
                <Card.Title className="bold_title_div ">
                    <span className="bold_title">
                        {item.title}
                    </span>
                    <Dropdown align="end">
                        <Dropdown.Toggle className="bg-transparent" >
                            <Image loading="lazy" src="optionIcon.png" alt="option" className="optionIcon " />
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Title>
                <Card.Text className="card_text">
                    {item.paragraph}
                </Card.Text>
                <div className="date_location_div">
                    {
                        item?.date &&

                        <div className="post_same_style">
                            <Image loading="lazy" src="calender.png" alt="calender" className="calender"></Image>
                            <span>{item.date}</span>
                        </div>
                    }
                    {item.company_name &&
                        <div className="post_same_style">
                            <Image loading="lazy" src="store.png" alt="" className="calender"></Image>
                            <span>{item.company_name}</span>
                        </div>
                    }
                    {item.location && <div className="post_same_style">
                        <Image loading="lazy" src="location.png" alt="location" className="location"></Image>
                        <span className="text-capitalize">{item.location}</span>
                    </div>}
                </div>

                {item.websiteLink && <Button className="w-100 mt-4 text-capitalize bg-transparent"
                    style={{ fontSize: "13px", color: `${item.category === "meetup" ? "red" : "green"}`, border: "1px solid black" }} >

                    {item.websiteLink}</Button>}

                <div className="post_profile_container mt-4">
                    <div className="post_profile_div">
                        <Image loading="lazy" src={item.user_profile} alt={item.user_name} className="post_profile_img"></Image>
                        <span className="post_profile_name">{item.user_name}</span>
                    </div>
                    <div className="post_share_view_div">
                        <span className="post_views">
                            <Image src="eye.png" alt="views" loading="lazy" className="viewsIcon" />
                            <span>{item.views}k views</span>
                        </span>
                        <div className="share_div px-2 py-1">
                            <Image loading="lazy" src="share.png" alt="share" className="shareIcon" />
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PostCard
