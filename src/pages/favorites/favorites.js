import { Breadcrumbs } from '../../components';
import { TeamCard } from '../main/components/team-card/team-card';
import { readAllLS, removeLS } from '../../LS';
import { useEffect, useState } from 'react';
import styles from './favorites.module.css';

export const Favorites = () => {
	const [remove, setRemove] = useState(false);
	const [ls, setLs] = useState([]);
	useEffect(() => {
		setLs(readAllLS());
	}, [remove]);

	const removeLc = (key) => {
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
			<Breadcrumbs address="/">Home /</Breadcrumbs>
			<Breadcrumbs address={`/favorites`}>Favorites</Breadcrumbs>
			<div className={styles.container}>
				{ls.map(({ name, person }) => {
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
							onClick={removeLc}
						>
							Удалить
						</TeamCard>
					);
				})}
			</div>
		</>
	);
};
