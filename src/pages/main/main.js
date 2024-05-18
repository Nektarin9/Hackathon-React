import { TeamCard } from './components';
import { database } from '../../database';
import { saveLocalStorage } from '../../LS';
import { Breadcrumbs, Button } from '../../components';

import styles from './main.module.css';


export const Main = () => {
	const { DB_VLADISLAV, DB_NATALIA, DB_MICHAEL } = database;
	return (
		<>
			<Breadcrumbs address="/">Home</Breadcrumbs>
			<div className={styles.mainContainer}>
				<TeamCard
					id={DB_VLADISLAV.name}
					name={DB_VLADISLAV.person.name}
					aboutMe={DB_VLADISLAV.person.content}
					photo={DB_VLADISLAV.person.photo}
				/>
				<Button
					color={'#ac1c02'}
					type={true}
					parameter={DB_VLADISLAV}
					onClick={saveLocalStorage}
				>
					Добавить
				</Button>
				<TeamCard
					id={DB_MICHAEL.name}
					name={DB_MICHAEL.person.name}
					aboutMe={DB_MICHAEL.person.content}
					photo={DB_MICHAEL.person.photo}
				/>
				<Button
					color={'#ac1c02'}
					type={true}
					parameter={DB_MICHAEL}
					onClick={saveLocalStorage}
				>
					Добавить
				</Button>
				<TeamCard
					id={DB_NATALIA.name}
					name={DB_NATALIA.person.name}
					aboutMe={DB_NATALIA.person.content}
					photo={DB_NATALIA.person.photo}
				/>
				<Button
					color={'#ac1c02'}
					type={true}
					parameter={DB_NATALIA}
					onClick={saveLocalStorage}
				>
					Добавить
				</Button>
			</div>
		</>
	);
};
