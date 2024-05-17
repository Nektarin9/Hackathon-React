import { Footer, Header } from './components';
import { Main, Participants, Favorites, AboutUs, Page404 } from './pages';
import { DB_VLADISLAV, DB_NATALIA, DB_MICHAEL } from './database';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/Vladislav" element={<Participants DB={DB_VLADISLAV}/>} />
					<Route path="/Michael" element={<Participants />} />
					<Route path="/Natalia" element={<Participants />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

// <Progress protsent={85} technology={"REACT"}></Progress>;
