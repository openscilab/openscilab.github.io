import './Card.scss';
import { Panel } from 'rsuite';
import FaIcon from '@components/FaIcon';

const Card = (props: { data: OBJ }) => {
	const { name, img, job, description, linkedin_url, github_url } = props.data || {};

	return (
		<div className='team-card'>
			<Panel className='card-panel'>
				<div className='img-container'>
					<div className='img-wrapper'>
						<img alt={name} src={img} />
					</div>
				</div>

				<div className='card-header'>
					<div className='header-title'>
						<h2 className='whitespace-nowrap'>{name}</h2>
						<h3 className='whitespace-nowrap'>{job}</h3>
					</div>
				</div>

				<div className='card-description'>
					<p>{description}</p>
				</div>

				<div className='footer'>
					<a
						href={linkedin_url}
						target='_blank'
						rel='noreferrer'
						className='linkedin social'
						aria-label='Linkedin social'>
						<FaIcon fa='b-linkedin-in' />
					</a>

					<a href={github_url} target='_blank' rel='noreferrer' className='github social' aria-label='Github social'>
						<FaIcon fa='b-github' />
					</a>
				</div>
			</Panel>
		</div>
	);
};

export default Card;
