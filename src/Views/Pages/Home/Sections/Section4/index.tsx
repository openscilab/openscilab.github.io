import './index.scss';
import { useEffect } from 'react';
import useInputs from 'use-inputs';
import Btn from '@components/BTN/BTN';
import { Tooltip, Whisper } from 'rsuite';
import FaIcon from '@src/Components/FaIcon';
import useFetch from '@src/Tools/Hooks/useFetch';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import EditableInput from '@src/Components/EditableInput/EditableInput';
import InputSelector from '@src/Components/InputSelector/InputSelector';
import { classes, classNames, Notify } from '../../../../../Tools/Utils/React';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

const Section4 = () => {
	const { swiper } = useDashboard();
	const [mounted, setMounted] = useMountedState(false);
	const { Post, loading } = useFetch('https://back.autohq.tech/projects/osl/contact-us');
	const options = ['Providing feedback', 'Interested to Collaborate', 'Others']?.map(o => ({ value: o, label: o }));

	// ? ------------------------- Hooks ----------------------------

	const { register, setInputValue, valueOf, validOf, resetInputs, isInputsValid, labelOf, getInputsData } = useInputs({
		validation: {
			name: { required: true },
			email: {
				required: true,
				regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			},
			reason: { required: true },
			message: { required: true },
		},

		labels: {
			email: 'Email *',
			name: 'Full name  *',
			message: 'Message *',
			reason: 'Please let us know the reason for your inquiry *',
		},
	});

	// ? ------------------------- functions ----------------------------

	//  send message
	const onSubmit = async () => {
		try {
			await Post({
				base: false,
				body: getInputsData(),
				url: 'https://back.autohq.tech/projects/osl/contact-us',
			});

			Notify.success('successful!');
		} catch (e: any) {
			Notify.error('Unsuccessful!');
			return e;
		}

		resetInputs();
	};

	// ? ---------------------- useEffects ------------------------

	useEffect(() => {
		if (swiper?.activeIndex === 4) setMounted(true);
		else setMounted(false);
	}, [swiper?.activeIndex]);

	// -------------------------------------------------------------

	return (
		<div className={classNames('home-section-layout-4', { mounted: mounted })}>
			<div className='contact-content'>
				<div className='header'>
					<h2>CONTACT US!</h2>
				</div>

				<div className='contact-form'>
					<EditableInput
						{...register('name')}
						label={labelOf('name')}
						placeholder='Enter your full name'
						isValid={validOf('name').isValidDirty}
					/>
					<EditableInput
						type='email'
						{...register('email')}
						label={labelOf('email')}
						placeholder='Enter email'
						isValid={validOf('email').isValidDirty}
					/>
					<InputSelector
						data={options}
						placeholder='Select'
						value={valueOf('reason')}
						label={labelOf('reason')}
						error={!validOf('reason').isValidDirty}
						onChange={v => setInputValue('reason', v)}
						onClean={() => setInputValue('reason', '')}
					/>

					<EditableInput
						lines={3}
						{...register('message')}
						label={labelOf('message')}
						placeholder='Write your message'
						isValid={validOf('message').isValidDirty}
					/>

					<div className='form-footer'>
						<Btn
							children='Send'
							{...{ loading }}
							onClick={onSubmit}
							disabled={!isInputsValid}
							{...classes({ 'ready-to-submit': isInputsValid })}
						/>
						<Whisper trigger={'hover'} speaker={<Tooltip children='Reset inputs' />} placement='top'>
							<div className='ml-4' onClick={() => resetInputs()}>
								<FaIcon fa='r-arrows-rotate' />
							</div>
						</Whisper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section4;
