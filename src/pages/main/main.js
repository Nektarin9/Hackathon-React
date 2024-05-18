import { database } from '../../database';
import { saveLocalStorage } from '../../LS';
import { TeamCard } from './components/team-card/team-card';
import { Breadcrumbs } from '../../components';

import styles from './main.module.css';
import { useEffect } from "react";

export const Main = () => {
	const team = Object.entries(database);

	useEffect(() => {
		const cards = document.querySelectorAll(`.${styles.card}`);
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.style.opacity = 1;
				card.style.transform = 'translateY(0)';
			}, index * 300);
		});
	}, [team]);

	return (
		<>
			<Breadcrumbs address="/">Home</Breadcrumbs>
			<div className={styles.container}>
				{team.map((element) => {
					let personDb = element[1];
					return (
						<TeamCard
							key={personDb.name}
							id={personDb.name}
							name={personDb.person.name}
							content={personDb.person.content}
							photo={personDb.person.photo}
							color={'rgb(4 101 78)'}
							shadowColor={'#037a03'}
							typeBtn={true}
							parameter={personDb}
							onClick={saveLocalStorage}
						>
							Добавить в избранное
						</TeamCard>
					);
				})}
			</div>
		</>
	);
};
