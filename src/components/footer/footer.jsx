import styles from './footer.module.css';
import { Clock } from "../сlock/clock";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Clock/>
			</div>
		</footer>
	);
};
