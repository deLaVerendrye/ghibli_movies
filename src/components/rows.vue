<script>

import movie_card from './movie_card.vue'

export default{
    data: () => {
        return {
            nothing: ""
        }
    },
    props: {
        movies: Array
    },
    components: {movie_card}
}
</script>

<template>
    <div v-for="movie in movies" class="col-lg-3">
        <movie_card :title="movie.title" :director="movie.director" :image_src="movie.image" :date_release="movie.release_date" />
    </div>
</template>

<style>
</style>