import { database } from '../../database';
import { useState } from 'react';
import { Popover } from '../../components';
import { saveLocalStorage } from '../../LS';
import { TeamCard } from '../components';
import { Breadcrumbs } from '../../components';
import { useEffect } from 'react';
import styles from './main.module.css';

export const Main = () => {
	const [popoverBlock, setPopoversBlock] = useState(false);
	const team = Object.entries(database);

	const savePerson = (personDb) => {
		saveLocalStorage(personDb);
		setPopoversBlock(!popoverBlock);
		setTimeout(() => {
			setPopoversBlock(false);
		}, 1500);
	};
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
			<Breadcrumbs address="/team-webcite">Home</Breadcrumbs>
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
							onClick={savePerson}
						>
							Добавить
							<br />в избранное
						</TeamCard>
					);
				})}
				{popoverBlock && <Popover />}
			</div>
		</>
	);
};
