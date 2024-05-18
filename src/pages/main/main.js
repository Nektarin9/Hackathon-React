import { database } from '../../database';
import { saveLocalStorage } from '../../LS';
import { TeamCard } from './components/team-card/team-card';
import { Breadcrumbs } from '../../components';

import styles from './main.module.css';

export const Main = () => {
	const team = Object.entries(database);
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
