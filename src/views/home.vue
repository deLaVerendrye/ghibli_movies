<script>

import Movie_card from './components/movie_card.vue'
import rows from './components/rows.vue'

export default{
    data() {
        return {
            movies: null,
            grouped_movies: null,
            width: window.innerWidth,
            search: ""
        };
    },
    methods: {
        async fetchData() {
            const movie_datas = await fetch("https://ghibliapi.herokuapp.com/films/");
            this.movies = await movie_datas.json();
            this.groupMovies()
        },
        groupMovies(){
          let size = this.width >= 576 ? 2 : 1
          size = this.width >= 992 ? 3 : size
          size = this.width >= 1200 ? 4 : size
          
          let groups = [];
          let grouped_movies = [];

          this.filteredMovies.forEach(data => {
            groups.push(data)
            if(data === this.filteredMovies[this.filteredMovies.length -1]){
              grouped_movies.push(groups)
              groups = []
            }
            else if(groups.length == size){
              grouped_movies.push(groups)
              groups = []
            }
          });
          this.grouped_movies = grouped_movies
        },
        setWidth(){
          this.width = window.innerWidth
        }
    },
    watch: {
      width(){
        this.groupMovies()
      },
      search(){
        this.groupMovies()
      }
    },
    mounted() {
        this.fetchData()
        window.addEventListener('resize', this.setWidth)
    },
    computed: {
      filteredMovies(){
        let movies = [];
        this.movies.forEach(element => {
          element.title.toLowerCase().includes(this.search.toLowerCase()) ? movies.push(element) : null
        })
        return movies
      }
    },
    components: { Movie_card, rows }
}
</script>

<template>
  <ul class="nav py-2 px-4 justify-content-center">
    <li class="nav-item">
      <div class="input-group">
        <input type="text" v-model="search"  class="form-control custom-input" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
      </div>
    </li>
  </ul>
  <h1 v-if="!grouped_movies" >Loading...</h1>
  <div v-else class="custom-row m-auto">
    <div v-for="movies in grouped_movies" class="row m-2 justify-content-center">
      <rows :movies="movies" :length="filteredMovies.length"/>
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
.custom-input{
  width: 50ch!important;
}


@media only screen and (max-width: 992px){
  .custom-input{
    width: 40ch!important;
  }

}

@media only screen and (max-width: 576px){
  .custom-input{
    width: 30ch!important;
  }

}

</style>
