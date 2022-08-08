<script>

import Movie_card from './components/movie_card.vue'

export default{
    data() {
        return {
            movies: null
        };
    },
    methods: {
        async fetchData() {
            const movie_datas = await fetch("https://ghibliapi.herokuapp.com/films/");
            this.movies = await movie_datas.json();
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { Movie_card }
}
</script>

<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  <h1 v-if="!movies" >Loading...</h1>
  <div v-else class="row">  
    <div v-for="movie in movies" class="col-lg-2 m-3">
      <Movie_card :title="movie.title" :director="movie.director" :image_src="movie.image" :date_release="movie.release_date" />
    </div>
  </div>

</template>

<style scoped>

a{
  color: white;
  transition: ease-in-out;
  transition-duration: 500ms;
}

a:hover{
  color:aqua;
  transition: ease-in-out;
  transition-duration: 500ms;
}

</style>
