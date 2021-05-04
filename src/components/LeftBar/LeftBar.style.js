import styled from "styled-components/macro";

export const LeftBarList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const LeftBarListItem = styled.li`
    list-style: none;
    padding: 0;

    & a {
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;
    }

    & a.active {
        color: gold;
    }
`;

export default styled.nav`
    grid-area: nav;
    background-color: #888888;
    height: 90vh;
`;
