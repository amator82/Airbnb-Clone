import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';
import FavoritiesClient from './FavoritiesClient';

import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';

const FavoritiesPage = async () => {
	const currentUser = await getCurrentUser();
	const listings = await getFavoriteListings();

	if (!currentUser) {
		return (
			<ClientOnly>
				<EmptyState title='Unathorized' subtitle='Please login' />
			</ClientOnly>
		);
	}

	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title='No favorities found'
					subtitle='Looks like you have no favorite listings'
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<FavoritiesClient
				listings={listings}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
};

export default FavoritiesPage;
