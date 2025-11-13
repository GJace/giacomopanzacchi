import type { PageLoad } from './$types';
import movies from '$lib/assets/movies.json';

export const load: PageLoad = () => {
    // In a real project you might fetch from an API, but importing JSON is fine here
    return { movies };
};