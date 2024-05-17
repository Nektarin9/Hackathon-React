import styles from './header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Pixel Pioneers</div>
			<nav className={styles.nav}>
				<li className={styles.link}>пункт меню</li>
				<li className={styles.link}>пункт меню</li>
				<li className={styles.link}>пункт меню</li>
			</nav>
		</header>
	);
};
