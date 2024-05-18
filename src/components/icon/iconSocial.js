import styles from './icon.module.css';

export const IconSocial = ({ image, href }) => {
	return (
		<a href={href} target="_blanc" className={styles.icon}>
			<img src={image} alt="" />
		</a>
	);
};
