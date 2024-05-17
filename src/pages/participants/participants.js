import styles from './participants.module.css';
import foto from '../../image/kittens.jpg';
import { IconSocial, Badge, Progress, Slider, Breadcrumbs } from '../../components';
import { iconImages } from '../../constants/imagesPath';

export const Participants = ({ DB }) => {
	const { name, technology, badge, sliderImg, person } = DB;
	console.log(badge);
	return (
		<>
			<Breadcrumbs address="/">Home</Breadcrumbs>
			<Breadcrumbs address={`/${name}`}>{name}</Breadcrumbs>
			<div className={styles.participantsContainer}>
				<div className={styles.fotoContainer}>
					<img
						className={styles.fotoContent}
						src={person.photo}
						alt={person.name}
					/>
				</div>

				<div className={styles.socialContent}>
					<IconSocial image={iconImages.VK} />
					<IconSocial image={iconImages.telegram} />
					<IconSocial image={iconImages.github} />
				</div>
				<div className={styles.textContent}>
					<div className={styles.info}>
						<p>{person.name}</p>
						<p>Возраст: {person.age}.</p>
						<p>Город: {person.city}</p>
					</div>

					<p>{person.content}</p>
					{technology.map(({ protsent, name, color }, index) => (
						<Progress
							key={index}
							technology={name}
							color={color}
							protsent={protsent}
						/>
					))}
					{badge.map(({ title, color }, index) => (
						<Badge color={color} key={index}>
							{title}
						</Badge>
					))}
					<p>Примеры</p>
					<Slider imgSrc={sliderImg} />
				</div>
			</div>
		</>
	);
};
