import styles from './participants.module.css';
import foto from '../../image/kittens.jpg';
import { IconSocial } from '../../components';
import { iconImages } from '../../constants/imagesPath';

export const Participants = () => {
	return (
		<div className={styles.participantsContainer}>
			<div className={styles.fotoContainer}>
				<img className={styles.fotoContent} src={foto} alt="" />
			</div>
			<div className={styles.socialContent}>
				<IconSocial image={iconImages.VK} />
				<IconSocial image={iconImages.telegram} />
				<IconSocial image={iconImages.github} />
			</div>
			<div className={styles.textContent}>
				<div className={styles.info}>
					<h4>Имя</h4>
					<h4>Возраст:</h4>
				</div>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum
					dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet
					consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur
					adipisicing elit.
				</p>
			</div>
		</div>
	);
};
