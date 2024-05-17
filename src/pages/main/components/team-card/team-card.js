import styles from './team-card.module.css';
import { Link } from 'react-router-dom';
import foto from '../../../../image/kittens.jpg';

export const TeamCard = ({ id, name, aboutMe }) => {
	return (
		<div className={styles.cardContent}>
			<Link to={`/${id}`}>
				<div className={styles.block}>
					<div className={styles.photoContainer}>
						<img className={styles.fotoContent} src={foto} alt="" />
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
