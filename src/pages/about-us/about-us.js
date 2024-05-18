import { Breadcrumbs } from '../../components';
import styles from './about-us.module.css';

export const AboutUs = () => {
	return (
		<>
			<Breadcrumbs address="/">Home /</Breadcrumbs>
			<Breadcrumbs address={`/aboutus`}>Aboutus</Breadcrumbs>
			<div className={styles.container}>
				<h1 className={styles.h1_text}>
					Всем привет! Мы - команда Pixel Pioneers!
				</h1>
				<br />
				<p>
					Мы познакомились во время обучения в ResultSchool. С первой же
					совместной работы на хакатоне мы стали слаженной командой. По
					традиции, Владислав был избран тимлидом благодаря своим
					организаторским навыкам. Наталья стала нашим специалистом по стилям,
					благодаря её безупречному чувству дизайна и вниманию к деталям. Михаил
					— наш генератор идей, всегда полный инновационных и креативных
					решений. Вместе мы стремимся создавать удивительные проекты и
					достигать высоких результатов.
				</p>
				<img
					className={styles.img}
					src="https://iimg.su/s/18/OKOkKEd0STtA3z69K2gMZy7zoVonRFvliSlw9C2m.png"
					alt="Pixel Pioneers!"
				></img>
			</div>
		</>
	);
};
