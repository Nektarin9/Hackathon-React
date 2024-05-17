import styles from './progress.module.css';

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

	console.log(styles.progress_container);
	return (
		<>
			<h1 className={styles.h1_technology}>{technology}</h1>
			<div className={styles.container}>
				<div style={progressBar}>{protsent}</div>
			</div>
		</>
	);
};
