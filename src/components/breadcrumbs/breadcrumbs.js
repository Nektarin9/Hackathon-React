import { NavLink, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
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
				{children} /{' '}
			</NavLink>
		</>
	);
};
