import './index.scss';
import { FC } from 'react';
import FaIcon from '@components/FaIcon';

const Footer: FC = () => {
	return (
		<div className='footer-layout'>
			<div className='social-networks'>
				<a href='https://github.com/openscilab' target='_blank' rel='noreferrer'>
					<div className='footer-icons-wrapper'>
						<FaIcon fa='b-github' />
					</div>
				</a>

				<a href='https://www.linkedin.com/company/openscilab' target='_blank' rel='noreferrer'>
					<div className='footer-icons-wrapper'>
						<FaIcon fa='b-linkedin-in' />
					</div>
				</a>

				<a href='https://discord.gg/27J5SmWmdf' target='_blank' rel='noreferrer'>
					<div className='footer-icons-wrapper'>
						<FaIcon fa='b-discord' />
					</div>
				</a>

				<a href='https://medium.com/@social_62465' target='_blank' rel='noreferrer'>
					<div className='footer-icons-wrapper'>
						<FaIcon fa='b-medium' />
					</div>
				</a>

				<a href='https://twitter.com/openscilabx' target='_blank' rel='noreferrer'>
					<div className='footer-icons-wrapper'>
						<FaIcon fa='b-twitter' />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Footer;