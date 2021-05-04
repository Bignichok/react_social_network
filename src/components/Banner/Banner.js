import PropTypes from "prop-types";

import { StyledImg } from "./Banner.style";

const Banner = ({ imageUrl, imageAlt }) => <StyledImg src={imageUrl} alt={imageAlt} />;

Banner.propTypes = {
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
};

export default Banner;
