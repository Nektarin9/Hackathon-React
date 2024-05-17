import { Progress } from './components';
import { Main, Participants, Favorites } from './pages';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Все является иперативным стилем
export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/Vladislav" element={<Participants />} />
			<Route path="/Michael" element={<Participants />} />
			<Route path="/Natalia" element={<Participants />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="*" element={<div>Ошибка</div>} />
		</Routes>
	);

	// <Progress protsent={85} technology={"REACT"}></Progress>;
};
