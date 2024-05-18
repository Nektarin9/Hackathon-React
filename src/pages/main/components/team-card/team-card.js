import styles from './team-card.module.css';
import { Link } from 'react-router-dom';

export const TeamCard = ({ id, name, aboutMe, photo }) => {
	return (
		<div className={styles.cardContent}>
			<Link to={`/${id}`}>
				<div className={styles.block}>
					<div className={styles.photoContainer}>
						<img className={styles.fotoContent} src={photo} alt="" />
					</div>
					<div className={styles.textContainer}>
						<h1>{name}</h1>
						<p>{aboutMe}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};
