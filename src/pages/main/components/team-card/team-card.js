import PropTypes from 'prop-types';
import { Button, Card } from '../../../../components';

export const TeamCard = ({
	id,
	children,
	name,
	content,
	photo,
	color,
	shadowColor,
	typeBtn,
	parameter,
	onClick,
}) => {
	return (
		<Card id={id} name={name} aboutMe={content} photo={photo}>
			<Button
				color={color}
				shadowColor={shadowColor}
				type={typeBtn}
				parameter={parameter}
				onClick={onClick}
			>
				{children}
			</Button>
		</Card>
	);
};

TeamCard.propTypes = {
	id: PropTypes.string,
	children: PropTypes.string,
	name: PropTypes.string,
	content: PropTypes.string,
	photo: PropTypes.string,
	color: PropTypes.string,
	shadowColor: PropTypes.string,
	typeBtn: PropTypes.bool,
	parameter: PropTypes.any,
	onClick: PropTypes.func,
};
