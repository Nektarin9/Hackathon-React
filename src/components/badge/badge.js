export const Badge = ({ color, children }) => {
	const badgeStyle = {
		padding: '5px 15px',
		margin: "10px 8px",
		height: '40px',
		fontSize: '22px',
		backgroundColor: `${color}`,
		color: 'white',
		borderRadius: '10px',
	};
	return <button style={badgeStyle}>{children}</button>;
};
