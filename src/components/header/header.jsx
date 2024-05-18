import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to={"/"} className={styles.logo}>Pixel Pioneers</NavLink>
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
