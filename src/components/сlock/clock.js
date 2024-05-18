import { useEffect, useState } from "react";

export const Clock = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer); // Cleanup the interval on component unmount
	}, []);

	return (
		<div>
			<h2>{currentTime.toLocaleTimeString()}</h2>
			<h3>{currentTime.toLocaleDateString()}</h3>
		</div>
	);
};
