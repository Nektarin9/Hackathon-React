import styles from './progress.module.css';
import PropTypes from "prop-types";

export const Progress = ({ protsent, technology, color }) => {
	const progressBar = {
		display: `flex`,
		alignItems: `center`,
		justifyContent: `center`,
		width: `${protsent}`,
		height: '25px',
		backgroundColor: color,
		textAlign: 'center',
		borderRadius: '1em',
		color: 'white',
	};

	return (
		<>
			<h1 className={styles.h1_technology}>{technology}</h1>
			<div className={styles.container}>
				<div style={progressBar}>{protsent}</div>
			</div>
		</>
	);
};

Progress.propTypes = {
	propsent: PropTypes.string,
	technology: PropTypes.string,
	color: PropTypes.string,
};
