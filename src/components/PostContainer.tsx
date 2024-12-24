import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import PostCard from "./PostCard";
import LocationComponent from "./Location";

export interface PostDataTypes {
    id: number;
    post_image: string;
    category: string;
    title: string;
    paragraph: string;
    date: string | null;
    location: string;
    company_name: string;
    websiteLink: string;
    user_profile: string;
    user_name: string;
    views: number;
    category_image: string;
}
const PostContainer = () => {

    const postData: PostDataTypes[] = [
        {
            id: 1,
            post_image: "post1.png",
            category: "article",
            title: "What if famous brands had regular fonts? Meet RegulaBrands!",
            paragraph: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            date: null,
            location: "",
            company_name: "",
            websiteLink: "",
            user_profile: "post1_profile.png",
            user_name: "sarthak kamra",
            views: 1.4,
            category_image: "article.png"
        },
        {
            id: 2,
            post_image: "post2.png",
            category: "Education",
            title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
            paragraph: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
            date: null,
            location: "",
            company_name: "",
            websiteLink: "",
            user_profile: "post2_profile.png",
            user_name: "Sarah West",
            views: 1.4,
            category_image: "education.png"
        },
        {
            id: 3,
            post_image: "post3.png",
            category: "meetup",
            title: "Finance & Investment Elite Social Mixer @Lujiazui",
            paragraph: "",
            date: "Fri, 12 Oct, 2018",
            location: "ahmedabad, india",
            company_name: "",
            websiteLink: "visit website",
            user_profile: "post3_profile.png",
            user_name: "Ronal Jones",
            views: 1.4,
            category_image: "meetup.png"
        },
        {
            id: 4,
            post_image: "",
            category: "job",
            title: "Software Developer",
            paragraph: "",
            date: "",
            location: "ahmedabad, india",
            company_name: "Innovaccer Analytics Private Ltd.",
            websiteLink: "apply on timesjobs",
            user_profile: "post4_profile.png",
            user_name: "joseph gray",
            views: 1.4,
            category_image: "job.png"
        },
    ]

    return (
        <Container>
            <div className="posts_container mb-5  mt-5">
                <div className="post_grid">
                    <Row xs={1} className="g-3 w-100">
                        {postData.map((item: PostDataTypes, idx) => (
                            <PostCard item={item} key={idx} />
                        ))}
                    </Row>
                </div>
                <div className="friend_section w-25">
                    <LocationComponent />
                </div>
            </div>
        </Container>
    )
}

export default PostContainer
