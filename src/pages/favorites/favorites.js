import { Breadcrumbs } from '../../components';
import { TeamCard } from '../components';
import { iconImages } from '../../constants/imagesPath';
import { readAllLS, removeLS } from '../../LS';
import { useEffect, useState } from 'react';
import styles from './favorites.module.css';

export const Favorites = () => {
	const [remove, setRemove] = useState(false);
	const [ls, setLs] = useState([]);
	useEffect(() => {
		setLs(readAllLS());
	}, [remove]);

	const deletePerson = (key) => {
		ls.forEach(({ name }, index) => {
			if (name === key) {
				removeLS(key);
				setLs(ls.slice(1, index));
				setRemove(!remove);
			}
		});
	};
	return (
		<>
			<Breadcrumbs address="/team-webcite">Home /</Breadcrumbs>
			<Breadcrumbs address={`/team-webcite/favorites`}>Favorites</Breadcrumbs>
			<div className={styles.container}>
				{ls.length ? (
					ls.map(({ name, person }) => {
						return (
							<TeamCard
								key={name}
								id={name}
								name={person.name}
								content={person.content}
								photo={person.photo}
								color={'rgb(237 0 0)'}
								shadowColor={'rgb(255 0 0)'}
								typeBtn={true}
								parameter={name}
								onClick={deletePerson}
							>
								Удалить
							</TeamCard>
						);
					})
				) : (
					<div className={styles.smileyContainer}>
						<div>
							<h2>Неужели тебе так никто и не понравился?</h2>
							<img
								className={styles.smileyIcon}
								src={iconImages.smiley}
								alt="Печалька :("
							></img>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
