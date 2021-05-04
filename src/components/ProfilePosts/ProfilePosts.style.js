import styled from "styled-components/macro";

export const Title = styled.h3`
    margin: 0 0 10px 0;
`;

export const PostsList = styled.ul`
    margin: 0;
    padding: 10px;
`;

export const PostListItem = styled.li`
    display: flex;
    background-color: #787878;
    align-items: center;
    padding: 10px;
`;

export const ImageHolder = styled.div`
    width: 30px;
    height: 30px;
    background: center / cover no-repeat ${({ imageUrl }) => `url(${imageUrl})`};
    border-radius: 50%;
    margin-right: 20px;
`;

export const NameHolder = styled.div`
    margin: 0 0 10px 0;
    font-weight: bold;
`;

export const PostContent = styled.div``;

export default styled.div``;
