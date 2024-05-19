import { NavLink, Link, useNavigate } from 'react-router-dom';
import { iconImages } from '../../constants/imagesPath';
import styles from './header.module.css';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<header className={styles.header}>
			<NavLink to={'/'} className={styles.logo}>
				<span className={styles.sign_word}>Pixel Pioneers</span>
			</NavLink>
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
			<div className={styles.faContainer} onClick={() => navigate(-1)}>
				<img className={styles.btnBack} src={iconImages.back} alt="Назад" />
			</div>
		</header>
	);
};
