import './index.scss';
import { If } from 'tsx-statements';
import { Col, Modal, Row } from 'rsuite';
import { useEffect, useState } from 'react';
import FaIcon from '@src/Components/FaIcon';
import { text } from '@src/Data/donation.data';
import { classNames } from '@src/Tools/Utils/React';
import NeonBtn from '@src/Components/NeonBtn/NeonBtn';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import { ReactComponent as ETH } from '@assets/icons/ETH.svg';
import { ReactComponent as Tron } from '@assets/icons/Tron.svg';
import { ReactComponent as Bitcoin } from '@assets/icons/bitcoin.svg';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

const Section5 = () => {
	const { swiper } = useDashboard();
	const [notify, setNotify] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [mounted, setMounted] = useMountedState(false);
	const [copiedWallet, setCopiedWallet] = useState('');

	// ? ---------------------- useEffects ------------------------

	const closeModal = () => {
		setCopiedWallet('');
		setOpenModal(false);
	};

	useEffect(() => {
		if (swiper?.activeIndex === 5) setMounted(true);
		else setMounted(false);
	}, [swiper?.activeIndex]);

	return (
		<div className={classNames('home-section-layout-5', { mounted: mounted })}>
			<Row className='donate-card'>
				<Col xs={24} md={16} className='donate-content'>
					<p>{text}</p>
				</Col>

				<Col xs={24} md={8} className='btn-wrapper'>
					<a href='https://www.paypal.com/paypalme/AlirezaZol'>
						<NeonBtn fillingMode>Paypal</NeonBtn>
					</a>

					<NeonBtn fillingMode onClick={() => setOpenModal(true)}>
						Wallets
					</NeonBtn>

					<a href='https://www.coffeete.ir/opensource'>
						<NeonBtn fillingMode>Coffeete</NeonBtn>
					</a>

					<a href='https://www.buymeacoffee.com/openscilab'>
						<NeonBtn fillingMode>A Coffee</NeonBtn>
					</a>
				</Col>
			</Row>

			<Modal open={openModal} onClose={closeModal} className='wallets-modal'>
				<Modal.Header>Wallets</Modal.Header>
				<FaIcon fa='d-xmark' onClick={closeModal} />
				<Modal.Body>
					{wallets?.map(w => (
						<div className={classNames('card', { focused: copiedWallet === w?.name })}>
							<div className='header'>
								<div className='icon-wrapper'>{w?.icon}</div>
								{w?.name}
								<FaIcon
									fa='r-clipboard'
									onClick={() => {
										navigator.clipboard.writeText(w?.wallet);
										setCopiedWallet(w?.name);
										setNotify(true);
										setTimeout(() => setNotify(false), 4000);
									}}
								/>
							</div>

							<div className='wallet'>{w?.wallet}</div>
						</div>
					))}

					<If condition={notify}>
						<div className='footer'>
							<span className='tooltip'>{copiedWallet} wallet copied to clipboard</span>
						</div>
					</If>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Section5;

const wallets = [
	{ name: 'TRX / USDT-TRC20', wallet: 'TJRZxbft3JCgWijuHjQuVLpT22CXGoGw6z', icon: <Tron className='w-8 h-8' /> },
	{ name: 'ETH / USDT-ERC20', wallet: '0xFB27Ed4eFf0d434D653FEACF8E5755179a8Dcc4d', icon: <ETH className='w-10 h-10' /> },
	{ name: 'BTC', wallet: '13ptSfMqjGLxdxCReRNcJKFWFaR17jn5tv', icon: <Bitcoin className='w-8 h-8' /> },
];
