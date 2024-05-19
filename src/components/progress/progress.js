import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '../button/button';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styles from './progress.module.css';

export const Progress = ({ protsent, technology, color }) => {
	const [isCircular, setIsCircular] = useState(false);

	const progressBarStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: `${protsent}`,
		height: '25px',
		backgroundColor: color,
		textAlign: 'center',
		borderRadius: '1em',
		color: 'white',
	};

	const toggleView = () => {
		setIsCircular(!isCircular);
	};

	return (
		<>
			<div className={styles.buttonContainer}>
				<h1 className={styles.h1_technology}>{technology}</h1>
				<Button
					color={'rgb(4 101 78)'}
					shadowColor={'#037a03'}
					type={true}
					onClick={toggleView}
				>
					{isCircular ? 'Линейная' : 'Круговая'}
				</Button>
			</div>
			{isCircular ? (
				<div style={{ width: '200px', height: '200px' }}>
					<CircularProgressbar
						value={parseFloat(protsent)}
						text={`${protsent}`}
						styles={buildStyles({
							textColor: 'white',
							pathColor: color,
							trailColor: '#d6d6d6',
						})}
					/>
				</div>
			) : (
				<div className={styles.container}>
					<div style={progressBarStyle}>{protsent}</div>
				</div>
			)}
		</>
	);
};

Progress.propTypes = {
	propsent: PropTypes.string,
	technology: PropTypes.string,
	color: PropTypes.string,
};
