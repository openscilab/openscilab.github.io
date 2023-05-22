import { classes } from '@tools/Utils/React';
import { FC } from 'react';
import { Loader } from 'rsuite';

type LoadingCoverProps = { className?: string };

const LoadingCover: FC<LoadingCoverProps> = ({ className }) => (
	<Loader {...classes('loading-cover', className)} speed='slow' size='lg' center />
);

export default LoadingCover;
