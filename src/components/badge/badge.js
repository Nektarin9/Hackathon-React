import PropTypes from "prop-types";

export const Badge = ({ color, children }) => {
	const badgeStyle = {
		padding: '5px 15px',
		margin: "10px 8px",
		height: '40px',
		fontSize: '22px',
		maxWidth: "150px",
		backgroundColor: `${color}`,
		color: 'white',
		borderRadius: '10px',
	};
	return <div style={badgeStyle}>{children}</div>;
};

Badge.propTypes = {
	color: PropTypes.string,
	children: PropTypes.string,
};
