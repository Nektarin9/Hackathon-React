import styles from './popover.module.css';
export const Popover = () => {
	return (
		<div className={styles.modal}>
			<span className={styles.popoverContainer}>
				Спасибо, мне очень приятно :){' '}
			</span>
		</div>
	);
};
