import './NeonBtn.scss';
import { FC } from 'react';
import { Button } from 'rsuite';
import { If } from 'tsx-statements';
import FaIcon from '@components/FaIcon';
import { classNames } from '@tools/Utils/React';

const NeonBtn: FC<{
	onClick?: any;
	bolt?: boolean;
	children: string;
	ledMode?: boolean;
	selected?: boolean;
	fillingMode?: boolean;
}> = ({ children, bolt = false, ledMode = false, selected = false, fillingMode = false, onClick }) => {
	return (
		<Button
			onClick={() => onClick?.()}
			appearance={!ledMode ? 'primary' : undefined}
			className={classNames('neon-btn', { 'led-mode': ledMode, selected: selected, bolt: bolt, 'fill-mode': fillingMode })}>
			<If condition={bolt}>
				<FaIcon fa='s-bolt' />
			</If>

			<div className='child'>
				<If condition={fillingMode}>
					<FaIcon fa='s-arrow-right' />
				</If>
				{children}
			</div>

			<If condition={ledMode}>
				<span className='border-span top' />
				<span className='border-span bottom' />
			</If>

			<If condition={fillingMode}>
				<span className='filler' />
			</If>
		</Button>
	);
};

export default NeonBtn;
