'use client';

import React, { FC, useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
	error: Error;
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <EmptyState title='Oh' subtitle='Something went wrong!' />;
};

export default ErrorState;
