import styles from './footer.module.css';
import { Clock } from "../сlock/clock";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<Clock />
			</div>
		</footer>
	);
};
