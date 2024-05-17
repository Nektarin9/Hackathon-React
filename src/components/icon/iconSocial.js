import styles from './icon.module.css';

export const IconSocial = ({ image }) => {
	return (
		<div className={styles.icon}>
			<img src={image} alt="" />
		</div>
	);
};
