import { Footer, Header } from './components';
import { database } from './database';
import { Main, Participants, Favorites, AboutUs, Page404 } from './pages';
import { Routes, Route } from 'react-router-dom';
import styles from './app.module.css';

export const App = () => {
	const { DB_VLADISLAV, DB_MICHAEL, DB_NATALIA } = database;
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path="/team-webcite" element={<Main />} />
					<Route
						path="/team-webcite/Vladislav"
						element={<Participants DB={DB_VLADISLAV} />}
					/>
					<Route
						path="/team-webcite/Michael"
						element={<Participants DB={DB_MICHAEL} />}
					/>
					<Route
						path="/team-webcite/Natalia"
						element={<Participants DB={DB_NATALIA} />}
					/>
					<Route path="/team-webcite/favorites" element={<Favorites />} />
					<Route path="/team-webcite/aboutus" element={<AboutUs />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};
