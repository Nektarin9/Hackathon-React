import { Footer, Header } from './components';
import styles from './App.module.css';
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.content}>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
};
