import { TeamCard } from './components';
import styles from './main.module.css';

const users = {
	nata: {
		foto: '',
		name: 'Наталья',
		aboutMe:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. EligendiLorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
	},
	vladislav: {
		foto: '',
		name: 'Владислав',
		aboutMe:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
	},
	michael: {
		foto: '',
		name: 'Михаил',
		aboutMe:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi',
	},
};

export const Main = () => {
	return (
		<div className={styles.mainContainer}>
			<TeamCard id="Natalia" name={users.nata.name} aboutMe={users.nata.aboutMe} />
			<TeamCard
				id="Vladislav"
				name={users.vladislav.name}
				aboutMe={users.vladislav.aboutMe}
			/>
			<TeamCard
				id="Michael"
				name={users.michael.name}
				aboutMe={users.michael.aboutMe}
			/>
		</div>
	);
};
