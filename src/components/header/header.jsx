import styles from './header.module.css';
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Pixel Pioneers</div>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.link}>
						<Link to="/">Главная</Link>
					</li>
					<li className={styles.link}>
						<Link to="/aboutus">О нас</Link>
					</li>
					<li className={styles.link}>
						<Link to="/favorites">Избранное</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
