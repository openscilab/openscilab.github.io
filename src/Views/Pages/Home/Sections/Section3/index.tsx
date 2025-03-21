import './index.scss';
import FaIcon from '@components/FaIcon';
import { Col, Modal, Row, Tooltip, Whisper } from 'rsuite';
import Btn from '@src/Components/BTN/BTN';
import { useEffect, useState } from 'react';
import useWindow from '@src/Tools/Hooks/useWindow';
import prize from '@assets/Images/projects/prize.png';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import nava from '@assets/Images/projects/nava/nava.png';
import dmeta from '@assets/Images/projects/dmeta/dmeta.png';
import opr from '@assets/Images/projects/opr/opr.png';
import { classNames, classes } from '@src/Tools/Utils/React';
import artDark from '@assets/Images/projects/art/art-dark.png';
import useLocalStorage from '@src/Tools/Hooks/useLocalStorage';
import { ReactComponent as Star } from '@assets/icons/star.svg';
import { ReactComponent as Link } from '@assets/icons/link.svg';
import artLight from '@assets/Images/projects/art/art-light.png';
import pycmDark from '@assets/Images/projects/pycm/pycm-dark.png';
import { Swiper, SwiperSlide, useSwiper } from '@components/Swiper';
import pycmLight from '@assets/Images/projects/pycm/pycm-light.png';
import pyrggDark from '@assets/Images/projects/pyrgg/pyrgg-dark.png';
import pyrggLight from '@assets/Images/projects/pyrgg/pyrgg-light.png';
import samilaDark from '@assets/Images/projects/samila/samila-dark.png';
import pymiloDark from '@assets/Images/projects/pymilo/pymilo-dark.png';
import samilaLight from '@assets/Images/projects/samila/samila-light.png';
import pymiloLight from '@assets/Images/projects/pymilo/pymilo-light.png';
import mybuttonLight from '@assets/Images/projects/mybutton/mybutton-light.png';
import mybuttonDark from '@assets/Images/projects/mybutton/mybutton-dark.png';
import { ReactComponent as Development } from '@assets/icons/development.svg';
import reserverDark from '@assets/Images/projects/reserver/reserver-dark.png';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';
import reserverLight from '@assets/Images/projects/reserver/reserver-light.png';
import { CONFIG } from '@src/App/Config/constants';

type ReposInfos = { [key: string]: { forks: number; stars: number; release_link: string } };

const Section3 = () => {
	const { isMobile, isDesktop, size } = useWindow();
	const { registerSwiper } = useSwiper();
	const [swiper, setSwiper] = useState<any>();
	const { themeMode } = useLocalStorage();
	const { swiper: globalSwiper } = useDashboard();
	const [repos, setRepos] = useState<ReposInfos>();
	const [openModal, setOpenModal] = useState(false);
	const [mounted, setMounted] = useMountedState(false);
	const [selectedPro, setSelectedPro] = useState<any>({});

	// ? ----------------------- Vars --------------------------
	const numberOfProjectsCol = size.width > 1200 ? 4 : 3;
	// ? -------------------- useEffects 👇 -------------------- //

	useEffect(() => {
		if (globalSwiper?.activeIndex === 3) setMounted(true);
		else setMounted(false);
	}, [globalSwiper?.activeIndex]);

	useEffect(() => {
		projects?.forEach(p => getUserReposInfo(p?.account, p?.repoName));
	}, []);

	// ? -------------------- Utils 👇 -------------------- //

	const getUserReposInfo = async (account?: string, repoName?: string) => {
		if (!repoName) return;
		const acc = account;
		const res = await fetch(`${CONFIG.Github.api}/repos/${acc}/${repoName}`);
		const item = await res?.json();
		const { forks_count, stargazers_count } = item || {};

		const release = await fetch(`${CONFIG.Github.api}/repos/${acc}/${repoName}/releases/latest`);
		const { html_url } = await release?.json();

		setRepos(s => ({ ...s, [repoName]: { forks: forks_count, stars: stargazers_count, release_link: html_url } }));
	};

	const splitToChunks = (arr: any[], n: number) => {
		const numberOfChunks = Math.ceil(arr.length / n);
		let final_chunks = [];
		for (let i = 0; i < numberOfChunks; i++) {
			const chunk = arr.slice(i * n, n * (i + 1));
			final_chunks.push(chunk);
		}

		return final_chunks;
	};

	const social = (gitLink?: string, webLink?: string) => (
		<div className='social'>
			{gitLink && (
				<a href={gitLink} target='_blank' rel='noreferrer'>
					<FaIcon fa='b-github' />
				</a>
			)}
			{webLink && (
				<a href={webLink} target='_blank' rel='noreferrer'>
					<FaIcon fa='s-globe' />
				</a>
			)}
		</div>
	);

	const ProjectCard = (project: any) => (
		<div {...classes('project-img-info', { 'coming-soon': project?.coming_soon })}>
			<div
				className='first-row row'
				onClick={
					isDesktop
						? () => {
								setOpenModal(true);
								setSelectedPro(project);
						  }
						: () => window.open(project?.webLink, '_blank')
				}>
				<img
					className={`project-logo ${project?.title?.toLowerCase()}`}
					src={themeMode === 'dark' ? project.dark_logo : project.light_logo}
					alt='logo'
				/>
			</div>
			<div className='grant-row'>
				{project?.grant?.map((grant: any, i: any) => (
					<Whisper
						trigger='hover'
						controlId='control-id-hover'
						key={i}
						placement='top'
						speaker={<Tooltip>{grant}</Tooltip>}>
						<img src={prize} alt='grant-prize' />
					</Whisper>
				))}
			</div>

			<div className='second-row row'>
				{project?.coming_soon && (
					<div className='second-cell cell'>
						<div className='link'>
							<FaIcon fa='l-hourglass-clock' className='text-primary w-7 mr-2' />
							<span>Coming Soon</span>
						</div>
					</div>
				)}
				{!project?.coming_soon && (
					<>
						<div className='first-cell cell'>
							<div className='forks-wrapper'>
								<a href={project?.forkPage} target='_blank' rel='noreferrer'>
									<div className='link'>
										<Development className='icon' />
										<span>{repos?.[project?.repoName]?.forks || '-'} Forks</span>
									</div>
								</a>
							</div>

							<div className='stars-wrapper'>
								<a href={project?.starsPage} target='_blank' rel='noreferrer'>
									<div className='link'>
										<Star className='icon' />
										<span>{repos?.[project?.repoName]?.stars || '-'} Stars</span>
									</div>
								</a>
							</div>
						</div>

						<div className='second-cell cell'>
							<a href={repos?.[project?.repoName]?.release_link} target='_blank' rel='noreferrer'>
								<div className='link' title='Go to last release'>
									<Link className='icon' />
									<span>Latest Release</span>
								</div>
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	);

	return (
		<div className={classNames('home-section-layout-3', { mounted: mounted })}>
			<div
				className={classNames('section3-slider-container', {
					last:
						swiper?.activeIndex ===
						(isDesktop ? splitToChunks(projects, numberOfProjectsCol * 2).length - 1 : projects?.length - 1),
					first: swiper?.activeIndex === 0,
				})}>
				<FaIcon fa='d-angle-left' onClick={() => swiper?.slidePrev()} />

				<Swiper
					keyboard
					speed={2000}
					spaceBetween={100}
					{...registerSwiper}
					direction='horizontal'
					onInit={s => setSwiper(s)}
					className='section3-slider'
					pagination={{ clickable: true }}
					allowTouchMove={isMobile ? true : false}>
					{isDesktop && (
						<div>
							{splitToChunks(projects, numberOfProjectsCol * 2)?.map((chunk, i) => (
								<SwiperSlide key={i}>
									<div className='slide-content'>
										<Row className='px-5'>
											{chunk.map((project, j) => {
												return (
													<Col md={8} lg={6} key={j} className='project-col'>
														{ProjectCard(project)}
													</Col>
												);
											})}
										</Row>
									</div>
								</SwiperSlide>
							))}
						</div>
					)}
					{!isDesktop && (
						<div>
							{projects?.map((project, i) => {
								return (
									<SwiperSlide key={i}>
										<div className='slide-content'>
											<div className={classNames('project-info')}>
												<h2>{project?.title}</h2>
												<p>{project?.description}</p>

												<div className='read-more-btn-wrapper'>
													<Btn
														fa='d-angle-down'
														children='Read More'
														className='read-more-btn'
														onClick={() => {
															setOpenModal(true);
															setSelectedPro(project);
														}}
													/>
												</div>

												{social(project?.github, project?.webLink)}
											</div>

											{ProjectCard(project)}
										</div>
									</SwiperSlide>
								);
							})}
						</div>
					)}
				</Swiper>
				<FaIcon fa='d-angle-right' onClick={() => swiper?.slideNext()} />
			</div>
			<Modal size='md' open={openModal} onClose={() => setOpenModal(false)} className='project-modal'>
				<div>
					<img
						className={`modal-logo ${selectedPro?.title?.toLowerCase()}`}
						src={themeMode === 'dark' ? selectedPro.dark_logo : selectedPro.light_logo}
						alt='logo'
					/>
					<div>
						{isDesktop && <h2>{selectedPro?.title}</h2>}
						<p>{selectedPro?.description}</p>
					</div>
					{social(selectedPro?.github, selectedPro?.webLink)}
				</div>

				<FaIcon fa='d-xmark' onClick={() => setOpenModal(false)} />
			</Modal>
		</div>
	);
};

export default Section3;

const projects = [
	{
		title: 'PyCM',
		repoName: 'pycm',
		dark_logo: pycmDark,
		light_logo: pycmLight,
		account: 'sepandhaghighi',
		webLink: 'https://www.pycm.io',
		github: 'https://github.com/sepandhaghighi/pycm',
		forkPage: 'https://github.com/sepandhaghighi/pycm/forks',
		starsPage: 'https://github.com/sepandhaghighi/pycm/stargazers',
		grant: ['PSF Development Grant 2022', 'NLnet Grant 2022', 'Trelis AI Grant 2024', 'NLnet Grant 2024'],
		description: `PyCM is a multi-class confusion matrix library written in Python that supports both input data vectors and direct matrix, and is a proper tool for post-classification model evaluation that supports most classes and overall statistics parameters. PyCM is the swiss-army knife of confusion matrices, targeted mainly at data scientists that need a broad array of metrics for predictive models and accurate evaluation of a large variety of classifiers.`,
	},

	{
		title: 'PyMilo',
		repoName: 'PyMilo',
		dark_logo: pymiloDark,
		light_logo: pymiloLight,
		account: 'openscilab',
		grant: ['PSF Development Grant 2024', 'Trelis AI Grant 2024'],
		github: 'https://github.com/openscilab/pymilo',
		// webLink: 'https://github.com/openscilab/pymilo',
		forkPage: 'https://github.com/openscilab/pymilo/fork',
		starsPage: 'https://github.com/openscilab/pymilo/stargazers',
		description: `PyMilo is an open source Python package that provides a simple, efficient, and safe way for users to export pre-trained machine learning models in a transparent way. By this, the exported model can be used in other environments, transferred across different platforms, and shared with others. PyMilo allows the users to export the models that are trained using popular Python libraries like scikit-learn, and then use them in deployment environments, or share them  without exposing the underlying code or dependencies. The transparency of the exported models ensures reliability and safety for the end users, as it eliminates the risks of binary or pickle formats.`,
	},
	{
		dark_logo: nava,
		light_logo: nava,
		title: 'Nava',
		repoName: 'nava',
		account: 'openscilab',
		grant: ['PSF Development Grant 2025'],
		github: 'https://github.com/openscilab/nava',
		// webLink: 'https://github.com/openscilab/nava',
		forkPage: 'https://github.com/openscilab/nava/forks',
		starsPage: 'https://github.com/openscilab/nava/stargazers',
		description: `Nava is a Python library that allows users to play sound in Python without any dependencies or platform restrictions. It is a cross-platform solution that runs on any operating system, including Windows, macOS, and Linux. Its lightweight and easy-to-use design makes Nava an ideal choice for developers looking to add sound functionality to their Python programs.`,
	},
	{
		title: 'PyRGG',
		repoName: 'pyrgg',
		dark_logo: pyrggDark,
		light_logo: pyrggLight,
		account: 'sepandhaghighi',
		github: 'https://github.com/sepandhaghighi/pyrgg',
		webLink: 'https://www.pyrgg.site',
		forkPage: 'https://github.com/sepandhaghighi/pyrgg/forks',
		starsPage: 'https://github.com/sepandhaghighi/pyrgg/forks',
		description: `PyRGG is a user-friendly synthetic random graph generator that is written in Python and supports multiple graph file formats, such as DIMACS-Graph files. It can generate graphs of various sizes and is specifically designed to create input files for a wide range of graph-based research applications, including testing, benchmarking, and performance analysis of graph processing frameworks. PyRGG is aimed at computer scientists who are studying graph algorithms and graph processing frameworks.`,
	},
	{
		title: 'Samila',
		repoName: 'samila',
		dark_logo: samilaDark,
		light_logo: samilaLight,
		account: 'sepandhaghighi',
		grant: ['IPFS Grant 2022'],
		github: 'https://github.com/sepandhaghighi/samila',
		webLink: 'https://www.samila.site',
		forkPage: 'https://github.com/sepandhaghighi/samila/forks',
		starsPage: 'https://github.com/sepandhaghighi/samila/forks',
		description: `Samila is a generative art generator written in Python, Samila lets you create images based on many thousand points. The position of every single point is calculated by a formula, which has random parameters. Because of the random numbers, every image looks different.`,
	},
	{
		title: 'Art',
		repoName: 'art',
		dark_logo: artDark,
		light_logo: artLight,
		account: 'sepandhaghighi',
		grant: ['PSF Development Grant 2024'],
		github: 'https://github.com/sepandhaghighi/art',
		webLink: 'https://www.ascii-art.site',
		forkPage: 'https://github.com/sepandhaghighi/art/forks',
		starsPage: 'https://github.com/sepandhaghighi/art/forks',
		description: `ASCII art is also known as "computer text art". It involves the smart placement of typed special characters or letters to make a visual shape that is spread over multiple lines of text. ART is a Python lib for text converting to ASCII art fancy.`,
	},
	{
		title: 'Reserver',
		repoName: 'reserver',
		dark_logo: reserverDark,
		light_logo: reserverLight,
		account: 'openscilab',
		github: 'https://github.com/openscilab/reserver',
		webLink: 'https://github.com/openscilab/reserver',
		forkPage: 'https://github.com/openscilab/reserver/fork',
		starsPage: 'https://github.com/openscilab/reserver/stargazers',
		description: `Reserver is an open source Python package that offers the ability to quickly reserve a PyPI package name. Got a notion? Before it's taken, immediately reserve the product name!`,
	},
	{
		title: 'DMeta',
		repoName: 'dmeta',
		dark_logo: dmeta,
		light_logo: dmeta,
		account: 'openscilab',
		grant: ['PSF Development Grant 2025'],
		github: 'https://github.com/openscilab/dmeta',
		webLink: 'https://github.com/openscilab/dmeta',
		forkPage: 'https://github.com/openscilab/dmeta/fork',
		starsPage: 'https://github.com/openscilab/dmeta/stargazers',
		description: `DMeta is an open source Python package that removes metadata of Microsoft Office files.`,
	},
	{
		title: 'MyButton',
		repoName: 'mybutton',
		dark_logo: mybuttonDark,
		light_logo: mybuttonLight,
		account: 'openscilab',
		github: 'https://github.com/openscilab/mybutton',
		webLink: 'https://mybutton.click',
		forkPage: 'https://github.com/openscilab/mybutton/fork',
		starsPage: 'https://github.com/openscilab/mybutton/stargazers',
		description: `MyButton is an open-source project that streamlines the process of sharing links to your preferred online services. It provides a user-friendly interface that allows users to seamlessly share content with just a few clicks. `,
	},
	{
		title: 'OPR',
		repoName: 'opr',
		dark_logo: opr,
		light_logo: opr,
		account: 'openscilab',
		github: 'https://github.com/openscilab/opr',
		webLink: 'https://github.com/openscilab/opr',
		forkPage: 'https://github.com/openscilab/opr/fork',
		starsPage: 'https://github.com/openscilab/opr/stargazers',
		description: `OPR is an open-source Python package designed to simplify and streamline primer design and analysis for biologists and bioinformaticians. OPR enables users to design, validate, and optimize primers with ease, catering to a wide range of applications such as PCR, qPCR, and sequencing. With a focus on user-friendliness and efficiency, OPR aims to bridge the gap between biological research and computational tools, making primer-related workflows faster and more reliable.`,
	},
];
