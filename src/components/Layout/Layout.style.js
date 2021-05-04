import styled from "styled-components/macro";

export default styled.div`
    display: grid;
    max-width: 1200px;
    grid-template-areas:
        "header header"
        "nav c";
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
    margin: 0 auto;
`;
