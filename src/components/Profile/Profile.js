import Banner from "components/Banner";
import ProfileInfo from "components/ProfileInfo";
import ProfilePosts from "components/ProfilePosts";

import { BannerHolder } from "./Profile.style";

const Profile = () => {
    return (
        <div>
            <BannerHolder>
                <Banner imageUrl="https://png.pngtree.com/thumb_back/fh260/back_pic/00/02/44/5056179b42b174f.jpg" />
            </BannerHolder>
            <ProfileInfo />
            <ProfilePosts />
        </div>
    );
};

export default Profile;
