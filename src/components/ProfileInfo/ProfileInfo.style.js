import styled from "styled-components/macro";

export const ImageHolder = styled.div`
    width: 50px;
    height: 50px;
    background: center / cover no-repeat ${({ imageUrl }) => `url(${imageUrl})`};
    margin-right: 20px;
`;

export const PersonalInfoHolder = styled.div``;

export const Name = styled.p`
    margin: 0 0 10px 0;
`;

export const InfoList = styled.ul`
    margin: 0;
`;

export const InfoListItem = styled.li``;

export default styled.div`
    display: flex;
`;
