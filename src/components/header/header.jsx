import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<NavLink to={"/"} className={styles.logo}>Pixel Pioneers</NavLink>
			<nav className={styles.nav}>
				<NavLink to={"/Vladislav"} className={styles.link}>Владислав</NavLink>
				<NavLink to={"/Michael"} className={styles.link}>Михаил</NavLink>
				<NavLink to={"/Natalia"} className={styles.link}>Наталия</NavLink>
				<NavLink to={"/favorites"} className={styles.link}>Избранные</NavLink>
			</nav>
		</header>
	);
};
