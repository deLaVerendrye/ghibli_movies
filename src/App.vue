<script>

import Movie_card from './components/movie_card.vue'
import rows from './components/rows.vue'

export default{
    data() {
        return {
            movies: null,
            grouped_movies: null
        };
    },
    methods: {
        async fetchData() {
            const movie_datas = await fetch("https://ghibliapi.herokuapp.com/films/");
            this.movies = await movie_datas.json();
            this.groupMovies()
        },
        groupMovies(){
          let groups = [];
          let grouped_movies = [];
          this.movies.forEach(data => {
            if(groups.length < 4){
              groups.push(data)
              if(data === this.movies[this.movies.length -1]){
                grouped_movies.push(groups)
                groups = []
              }
            }
            else if(groups.length == 4){
              grouped_movies.push(groups)
              groups = []
              groups.push(data)
            }
          });
          this.grouped_movies = grouped_movies
        }
    },
    mounted() {
        this.fetchData();
    },
    components: { Movie_card, rows }
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
  <h1 v-if="!grouped_movies" >Loading...</h1>
  <div v-else class="custom-row">
    <div v-for="movies in grouped_movies" class="row m-3 justify-content-center" >
      <rows :movies="movies" />
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

.custom-row{
  padding: 0;
  width: fit-content;
}

</style>
