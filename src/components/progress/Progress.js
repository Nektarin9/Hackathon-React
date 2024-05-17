import styles from './Progress.module.css';

export const Progress = ({ protsent, technology }) => {
	const progressBar = {
		width: `${protsent}%`,
		height: '30px',
		backgroundColor: '#4caf50',
		textAlign: 'center',
		lineРeight: '30px',
		color: 'white',
	};

	console.log(styles.progress_container);
	return (
		<>
			<h1>{technology}</h1>
			<div className={styles.container}>
				<div style={progressBar}>{protsent}%</div>
			</div>
		</>
	);
};
