<script>

import movie_card from './movie_card.vue'

export default{
    data: () => {
        return {
            nothing: "",
        }
    },
    methods: {
        viewDetails(movie){
            console.log(movie)
        }
    },
    props: {
        movies: Array
    },
    components: {movie_card}
}
</script>

<template>
    <div v-for="movie in movies" class="col-xl-3 col-lg-4 col-md-6 col-sm-12"  @click="viewDetails(movie)">
        <movie_card :title="movie.title" :director="movie.director" :image_src="movie.image" :date_release="movie.release_date" />
    </div>
</template>

<style>
</style>