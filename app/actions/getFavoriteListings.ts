import prisma from '@/app/libs/prismadb';

import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return [];
		}

		const favorities = await prisma.listing.findMany({
			where: {
				id: {
					in:  [...(currentUser.favoriteIds || []) ]
				}
			}
		});

		const safeFavorities = favorities.map((favorite) => ({
			...favorite,
			createdAt: favorite.createdAt.toISOString()
		}));

		return safeFavorities;
	} catch (error: any) {
		throw new Error(error);
	}
}
