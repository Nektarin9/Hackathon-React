import { Breadcrumbs } from '../../components';
import styles from './about-us.module.css';

export const AboutUs = () => {
	return (
		<>
			<Breadcrumbs address="/">Home /</Breadcrumbs>
			<Breadcrumbs address={`/aboutus`}>Aboutus</Breadcrumbs>
			<div className={styles.container}>
				<div className={styles.containerContent}>
					Я ведущий инженер и Frontend разработчик, закончил Московский
					технический университет связи и информатики. Отлично владею HTML, CSS,
					JS, React, имею опыт коммерческой разработки, неоднократно учавствовал
					в хакатона в качестве Team Lead. Имею опыт работы с коммутаторами:
					Qtech, D-link, Edge Core и другими. мне нравятся ночные и вечерные
					прогулки. В свободное время я люблю посещать спортзал.
				</div>

			</div>
		</>
	);
};
