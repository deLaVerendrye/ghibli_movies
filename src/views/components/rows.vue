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
        movies: Array,
        length: Number
    },
    components: {movie_card}
}
</script>

<template>
    <router-link v-for="movie in movies" :to="{ name: 'movie', params: { movieId: movie.id} }" custom v-slot="{navigate}">    
        <div :class=" length > 4 ? 'col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12' : 'col'"  @click="navigate">
            <movie_card :title="movie.title" :director="movie.director" :image_src="movie.image" :date_release="movie.release_date" />
        </div>
    </router-link>
</template>

<style>
</style>