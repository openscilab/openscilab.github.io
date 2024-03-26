import './index.scss';
import { Col, Modal, Row } from 'rsuite';
import FaIcon from '@components/FaIcon';
import Btn from '@src/Components/BTN/BTN';
import { useEffect, useState } from 'react';
import useWindow from '@src/Tools/Hooks/useWindow';
import { classNames } from '@src/Tools/Utils/React';
import useDashboard from '@src/Tools/Hooks/useDashboard';
import { ReactComponent as Star } from '@assets/icons/star.svg';
import { ReactComponent as Link } from '@assets/icons/link.svg';
import { Swiper, SwiperSlide, useSwiper } from '@components/Swiper';
import { ReactComponent as Development } from '@assets/icons/development.svg';
import useMountedState from '@src/Tools/Hooks/useMountedState/useMountedState';

import { ReactComponent as PYCMHorizontal } from '@assets/Images/projects/pycm/horizontal.svg';
import { ReactComponent as PYMILOHorizontal } from '@assets/Images/projects/pymilo/horizontal.svg';
import { ReactComponent as Nava } from '@assets/Images/projects/nava/nava.svg';
import { ReactComponent as PyRGG } from '@assets/Images/projects/pyrgg/pyrgg.svg';
import { ReactComponent as Samila } from '@assets/Images/projects/samila/samila.svg';
import { ReactComponent as Art } from '@assets/Images/projects/art/art.svg';
import { ReactComponent as reserver } from '@assets/Images/projects/reserver/reserver.svg';

type ReposInfos = { [key: string]: { forks: number; stars: number } };

const Section3 = () => {
	const { isMobile, isDesktop, size } = useWindow();
	const { registerSwiper } = useSwiper();
	const [swiper, setSwiper] = useState<any>();
	const { swiper: globalSwiper } = useDashboard();
	const [repos, setRepos] = useState<ReposInfos>();
	const [openModal, setOpneModal] = useState(false);
	const [mounted, setMounted] = useMountedState(false);
	const [selectedPro, setSelectedPro] = useState<any>({});
	const ModalLogo = selectedPro?.logo || '';

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
		const res = await fetch(`https://api.github.com/repos/${acc}/${repoName}`, {
			headers: { Authorization: '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' },
		});
		const item = await res?.json();

		const { forks_count, stargazers_count } = item || {};
		setRepos(s => ({ ...s, [repoName]: { forks: forks_count, stars: stargazers_count } }));
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

	const social = (gitLink: string, webLink?: string) => (
		<div className='social'>
			<a href={gitLink} target='_blank' rel='noreferrer'>
				<FaIcon fa='b-github' />
			</a>
			{webLink && (
				<a href={webLink} target='_blank' rel='noreferrer'>
					<FaIcon fa='s-globe' />
				</a>
			)}
		</div>
	);

	const ProjectCard = (project: any, Logo: any) => (
		<div className='project-img-info'>
			{/* <a href={project?.webLink} target='_blank' rel='noreferrer'> */}
			<div
				className='first-row row'
				onClick={() => {
					setOpneModal(true);
					setSelectedPro(project);
				}}>
				<Logo className={`project-logo ${project?.title?.toLowerCase()}`} />
			</div>
			{/* </a> */}

			<div className='second-row row'>
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
					<a href={project?.lastRelease} target='_blank' rel='noreferrer'>
						<div className='link' title='Go to last release'>
							<Link className='icon' />
							<span>Latest Release</span>
						</div>
					</a>
				</div>
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
												const Logo = project?.logo || {};
												return (
													<Col md={8} lg={6} key={j} className='project-col'>
														{ProjectCard(project, Logo)}
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
								const Logo = project?.logo || {};

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
															setOpneModal(true);
															setSelectedPro(project);
														}}
													/>
												</div>

												{social(project?.github, project?.webLink)}
											</div>

											{ProjectCard(project, Logo)}
										</div>
									</SwiperSlide>
								);
							})}
						</div>
					)}
				</Swiper>
				<FaIcon fa='d-angle-right' onClick={() => swiper?.slideNext()} />
			</div>
			<Modal size='md' open={openModal} onClose={() => setOpneModal(false)} className='project-modal'>
				<div>
					<ModalLogo className={`modal-logo ${selectedPro?.title?.toLowerCase()}`} />
					<div>
						{isDesktop && <h2>{selectedPro?.title}</h2>}
						<p>{selectedPro?.description}</p>
					</div>
					{social(selectedPro?.github, selectedPro?.webLink)}
				</div>

				<FaIcon fa='d-xmark' onClick={() => setOpneModal(false)} />
			</Modal>
		</div>
	);
};

export default Section3;

const projects = [
	{
		title: 'PyCM',
		repoName: 'pycm',
		logo: PYCMHorizontal,
		account: 'sepandhaghighi',
		webLink: 'https://www.pycm.io',
		github: 'https://github.com/sepandhaghighi/pycm',
		forkPage: 'https://github.com/sepandhaghighi/pycm/forks',
		starsPage: 'https://github.com/sepandhaghighi/pycm/stargazers',
		lastRelease: 'https://github.com/sepandhaghighi/pycm/releases/tag/v4.0',
		description: `PyCM is a multi-class confusion matrix library written in Python that supports both input data vectors and direct matrix, and is a proper tool for post-classification model evaluation that supports most classes and overall statistics parameters. PyCM is the swiss-army knife of confusion matrices, targeted mainly at data scientists that need a broad array of metrics for predictive models and accurate evaluation of a large variety of classifiers.`,
	},

	{
		title: 'PyMilo',
		repoName: 'PyMilo',
		logo: PYMILOHorizontal,
		account: 'openscilab',
		github: 'https://github.com/openscilab/pymilo',
		// webLink: 'https://github.com/openscilab/pymilo',
		forkPage: 'https://github.com/openscilab/pymilo/fork',
		starsPage: 'https://github.com/openscilab/pymilo/stargazers',
		lastRelease: 'https://github.com/openscilab/pymilo/releases/tag/v0.4',
		description: `PyMilo is an open source Python package that provides a simple, efficient, and safe way for users to export pre-trained machine learning models in a transparent way. By this, the exported model can be used in other environments, transferred across different platforms, and shared with others. PyMilo allows the users to export the models that are trained using popular Python libraries like scikit-learn, and then use them in deployment environments, or share them  without exposing the underlying code or dependencies. The transparency of the exported models ensures reliability and safety for the end users, as it eliminates the risks of binary or pickle formats.`,
	},
	{
		logo: Nava,
		title: 'Nava',
		repoName: 'nava',
		account: 'openscilab',
		github: 'https://github.com/openscilab/nava',
		// webLink: 'https://github.com/openscilab/nava',
		forkPage: 'https://github.com/openscilab/nava/forks',
		starsPage: 'https://github.com/openscilab/nava/stargazers',
		lastRelease: 'https://github.com/openscilab/nava/releases/tag/v0.2',
		description: `Nava is a Python library that allows users to play sound in Python without any dependencies or platform restrictions. It is a cross-platform solution that runs on any operating system, including Windows, macOS, and Linux. Its lightweight and easy-to-use design makes Nava an ideal choice for developers looking to add sound functionality to their Python programs.`,
	},
	{
		title: 'PyRGG',
		repoName: 'pyrgg',
		logo: PyRGG,
		account: 'sepandhaghighi',
		github: 'https://github.com/sepandhaghighi/pyrgg',
		webLink: 'https://www.pyrgg.site',
		forkPage: 'https://github.com/sepandhaghighi/pyrgg/forks',
		starsPage: 'https://github.com/sepandhaghighi/pyrgg/forks',
		lastRelease: 'https://github.com/sepandhaghighi/pyrgg/releases/tag/v1.4',
		description: `PyRGG is a user-friendly synthetic random graph generator that is written in Python and supports multiple graph file formats, such as DIMACS-Graph files. It can generate graphs of various sizes and is specifically designed to create input files for a wide range of graph-based research applications, including testing, benchmarking, and performance analysis of graph processing frameworks. PyRGG is aimed at computer scientists who are studying graph algorithms and graph processing frameworks.`,
	},
	{
		title: 'Samila',
		repoName: 'samila',
		logo: Samila,
		account: 'sepandhaghighi',
		github: 'https://github.com/sepandhaghighi/samila',
		webLink: 'https://www.samila.site',
		forkPage: 'https://github.com/sepandhaghighi/samila/forks',
		starsPage: 'https://github.com/sepandhaghighi/samila/forks',
		lastRelease: 'https://github.com/sepandhaghighi/samila/releases/tag/v1.1',
		description: `Samila is a generative art generator written in Python, Samila lets you create images based on many thousand points. The position of every single point is calculated by a formula, which has random parameters. Because of the random numbers, every image looks different.`,
	},
	{
		title: 'Art',
		repoName: 'art',
		logo: Art,
		account: 'sepandhaghighi',
		github: 'https://github.com/sepandhaghighi/art',
		webLink: 'https://www.ascii-art.site',
		forkPage: 'https://github.com/sepandhaghighi/art/forks',
		starsPage: 'https://github.com/sepandhaghighi/art/forks',
		lastRelease: 'https://github.com/sepandhaghighi/art/releases/tag/v6.1',
		description: `ASCII art is also known as "computer text art". It involves the smart placement of typed special characters or letters to make a visual shape that is spread over multiple lines of text. ART is a Python lib for text converting to ASCII art fancy.`,
	},
	{
		title: 'Reserver',
		repoName: 'reserver',
		logo: reserver,
		account: 'openscilab',
		github: 'https://github.com/openscilab/reserver',
		webLink: 'https://github.com/openscilab/reserver',
		forkPage: 'https://github.com/openscilab/reserver/fork',
		starsPage: 'https://github.com/openscilab/reserver/stargazers',
		lastRelease: 'https://github.com/openscilab/reserver/releases/tag/v0.1',
		description: `Reserver is an open source Python package that offers the ability to quickly reserve a PyPI package name. Got a notion? Before it's taken, immediately reserve the product name!`,
	},
];
