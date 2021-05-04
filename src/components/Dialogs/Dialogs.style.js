import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const DialogsHolder = styled.div`
    border-right: 1px solid #000;
`;

export const DialogsLink = styled(NavLink)`
    display: block;
`;

export default styled.div`
    display: grid;
    grid-template-columns: 10% 1fr;
`;
