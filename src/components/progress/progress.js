import { useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './progress.module.css';
import { Button } from "../button/button";

export const Progress = ({protsent, technology, color}) => {
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
			<h1 className={styles.h1_technology}>{technology}</h1>
			{isCircular ? (
				<div style={{width: '100px', height: '100px'}}>
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
			<div className={styles.buttonContainer}>
				<Button сolor={'#000000'} type={true} onClick={toggleView}>
					{isCircular ? 'Линейная' : 'Круговая'}
				</Button>
			</div>
		</>
	);
};

Progress.propTypes = {
	propsent: PropTypes.string,
	technology: PropTypes.string,
	color: PropTypes.string,
};
