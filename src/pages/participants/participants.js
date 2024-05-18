import { IconSocial, Badge, Progress, Slider, Breadcrumbs } from '../../components';
import { iconImages } from '../../constants/imagesPath';
import styles from './participants.module.css';

export const Participants = ({ DB }) => {
	const { name, technology, badge, sliderImg, person, socialNetwork } = DB;
	return (
		<>
			<Breadcrumbs address="/">Home /</Breadcrumbs>
			<Breadcrumbs address={`/${name}`}>{name}</Breadcrumbs>
			<div className={styles.container_Badge}></div>
			<div className={styles.participantsContainer}>
				<div className={styles.fotoContainer}>
					<img
						className={styles.fotoContent}
						src={person.photo}
						alt={person.name}
					/>
				</div>
				<div className={styles.socialContent}>
					<IconSocial href={socialNetwork.vk} image={iconImages.VK} />
					<IconSocial
						href={socialNetwork.telegram}
						image={iconImages.telegram}
					/>
					<div className={styles.color_icon}></div>
					<IconSocial href={socialNetwork.github} image={iconImages.github} />
				</div>
				<div className={styles.textContent}>
					<div className={styles.info}>
						<p>{person.name}</p>
						<p>Возраст: {person.age}.</p>
						<p>Город: {person.city}</p>
						<p>{person.content}</p>
						<div className={styles.badges}>
							{badge.map(({ title, color }, index) => (
								<Badge color={color} key={index}>
									{title}
								</Badge>
							))}
						</div>
					</div>
				</div>

				{technology.map(({ protsent, name, color }, index) => (
					<Progress
						key={index}
						technology={name}
						color={color}
						protsent={protsent}
					/>
				))}
				<div className={styles.sliderContent}>
					<p>Примеры</p>
					<Slider imgSrc={sliderImg} />
				</div>
			</div>
		</>
	);
};
