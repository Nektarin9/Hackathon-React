import styles from './icon.module.css';
import PropTypes from "prop-types";

export const IconSocial = ({ image, href }) => {
	return (
		<a href={href} target="_blanc" className={styles.icon}>
			<img src={image} alt="" />
		</a>
	);
};

IconSocial.propTypes = {
	image: PropTypes.string,
	href: PropTypes.string,
};
