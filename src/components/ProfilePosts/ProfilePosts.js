import ProfilePostsItem from "./ProfilePostsItem";

import ProfilePostsWrapper, { Title, PostsList } from "./ProfilePosts.style";

const ProfilePosts = () => {
    return (
        <ProfilePostsWrapper>
            <Title>My posts</Title>
            <form action="">
                <input type="text" />
                <button>Send post</button>
            </form>
            <PostsList>
                <ProfilePostsItem />
            </PostsList>
        </ProfilePostsWrapper>
    );
};

export default ProfilePosts;
