import PropTypes from 'prop-types';
import styles from './button.module.css';
export const Button = ({ color, shadowColor, parameter, onClick, children, type }) => {
	const buttonStyle = {
		minWidth: '155px',
		minHeight: "50px",
		height: 'auto',
		padding: '5px 10px',
		boxShadow: `10px 10px 100px 6px ${shadowColor}`,
		backgroundColor: `${color}`,
	};
	return (
			<button
				onClick={() => onClick(parameter)}
				style={buttonStyle}
				className={
					type
						? `${styles.buttonStyle} ${styles.radius}`
						: `${styles.buttonStyle} ${styles.kvadrat}`
				}
			>
				{children}
			</button>
	);
};

Button.propTypes = {
	color: PropTypes.string,
	shadowColor: PropTypes.string,
	parameter: PropTypes.any,
	onClick: PropTypes.func,
	children: PropTypes.any,
	type: PropTypes.bool,
};
