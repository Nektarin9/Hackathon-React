import styles from './button.module.css';
export const Button = ({ color, onClick, children, type }) => {
	const buttonStyle = {
		width: '100%',
		height: '40px',
		backgroundColor: `${color}`,
	};
	return (
		<div className={styles.button_container}>
			<button
				onClick={onClick}
				style={buttonStyle}
				className={
					type
						? `${styles.buttonStyle} ${styles.radius}`
						: `${styles.buttonStyle} ${styles.kvadrat}`
				}
			>
				{children}
			</button>
		</div>
	);
};
