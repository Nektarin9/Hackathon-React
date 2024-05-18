import { Breadcrumbs, Button } from '../../components';
import { TeamCard } from '../main/components';
import { readAllLS, removeLS } from '../../LS';
import { useEffect, useState } from 'react';
import styles from './favorites.module.css';



export const Favorites = () => {
	const [remove, setRemove] = useState(false);
	const [ls, setLs] = useState([])
		useEffect(() => {
			setLs(readAllLS())
		}, [remove])

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
			<div>
				{ls && ls.map(({ name, person }) => {
					return (
						<div key={name} className={styles.favoritesContainerFlex}>
							<TeamCard
								id={name}
								name={person.name}
								aboutMe={person.content}
								photo={person.photo}
							/>
							<Button
								color={'#d0e9e3'}
								type={true}
								parameter={name}
								onClick={removeLc}
							>
								Удалить
							</Button>
						</div>
					);
				})}
			</div>
		</>
	);
};
