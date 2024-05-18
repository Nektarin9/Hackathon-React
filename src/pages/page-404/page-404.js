import styles from './page-404.module.css';

export const Page404 = () => {
	return (
		<div className={styles.container}>
			<h1>404</h1>
			<p className={styles.description}>К сожалению, такая страница не существует. Напишите ваши пожелания, и мы сделаем всё возможное, чтобы она появилась ;)</p>
		</div>
	)
};
