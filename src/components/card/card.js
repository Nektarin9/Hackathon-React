import styles from './card.module.css';
import { Link } from 'react-router-dom';

export const Card = ({ id, name, aboutMe, photo, children }) => {
	return (
		<div className={styles.cardContent}>
			<Link to={`/${id}`}>
				<div className={styles.block}>
					<div className={styles.photoContainer}>
						<img className={styles.fotoContent} src={photo} alt={id} />
					</div>
					<div className={styles.textContainer}>
						<h1>{name}</h1>
						<p>{aboutMe}</p>
					</div>
				</div>
			</Link>
			<div className={styles.btn}>{children}</div>
		</div>
	);
};
