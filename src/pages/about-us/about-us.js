import { Breadcrumbs } from '../../components';
import { ABOUT_US } from '../../database';
import styles from './about-us.module.css';

export const AboutUs = () => {
	return (
		<>
			<Breadcrumbs address="/">Home /</Breadcrumbs>
			<Breadcrumbs address={`/aboutus`}>Aboutus</Breadcrumbs>
			<div className={styles.container}>
				<div className={styles.containerContent}>{ABOUT_US}</div>
			</div>
		</>
	);
};
