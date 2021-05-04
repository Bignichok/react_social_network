import PropTypes from "prop-types";

import { PostListItem, ImageHolder, NameHolder, PostContent } from "./ProfilePosts.style";

const ProfilePostsItem = ({
    imageUrl = "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg",
    name = "Default Name",
    postContent = "",
}) => {
    return (
        <PostListItem>
            <ImageHolder imageUrl={imageUrl} />
            <div>
                <NameHolder>{name}</NameHolder>
                <PostContent>{postContent}</PostContent>
            </div>
        </PostListItem>
    );
};

ProfilePostsItem.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    postContent: PropTypes.string,
};

export default ProfilePostsItem;
