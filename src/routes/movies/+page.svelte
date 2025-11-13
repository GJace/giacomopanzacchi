<script lang="ts">
    // The `data` prop comes from the load function above
    export let data: {
        movies: Array<{
            id: number;
            title: string;
            year: number;
            poster: string;
            watchedOn: string;
            rating: number;
            review: string;
        }>;
    };
</script>

{#each data.movies as movie (movie.id)}
    <div
        class="flex flex-col md:flex-row mb-8 rounded-lg shadow-sm overflow-hidden
           {movie.id % 2 === 0 ? 'md:flex-row-reverse' : ''}"
    >
        <!-- Poster column – 20 % width -->
        <div class="w-full md:w-1/5">
            <img
                src={movie.poster}
                alt="{movie.title} poster"
                class="w-full h-auto object-cover"
            />
        </div>

        <!-- Info column – 80 % width -->
        <div class="w-full md:w-4/5 p-4 flex flex-col justify-between">
            <!-- Title + Year -->
            <div class="flex items-baseline space-x-2 mb-2">
                <h2 class="text-xl font-semibold">{movie.title}</h2>
                <span class="text-gray-500">( {movie.year} )</span>
            </div>

            <!-- Watched On + Rating -->
            <div class="flex items-center text-gray-600 mb-2">
                <span class="mr-4">
                    Watched on: <strong>{movie.watchedOn}</strong>
                </span>
                <span>
                    Rating: <strong>{movie.rating} / 5</strong>
                </span>
            </div>

            <!-- Review (long text) -->
            <p class="text-gray-800 leading-relaxed">
                {movie.review}
            </p>
        </div>
    </div>
{/each}
