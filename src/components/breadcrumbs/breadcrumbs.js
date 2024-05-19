import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import PropTypes from 'prop-types';
export const Breadcrumbs = ({ address, children }) => {
	const location = useLocation();
	return (
		<>
			<NavLink
				className={
					address === location.pathname
						? `${styles.link_text_target}`
						: `${styles.link_text}`
				}
				to={address}
			>
				{children}{' '}
			</NavLink>
		</>
	);
};

Breadcrumbs.propTypes = {
	address: PropTypes.string,
	children: PropTypes.string,
};
