<script>
export default{
    data(){
        return {
            film: null,
            image: null,
            id: this.$route.params.movieId
        }
    },
    methods: {
        async fetchData(){
            const data = await fetch('https://ghibliapi.herokuapp.com/films/' + this.id)
            this.film = await data.json()
        }
    },
    mounted(){
        this.fetchData()
    }
}

</script>

<template>
    <div>
        <div v-if="!film" class="text-center" >
            <img src="../assets/logo.gif" alt="">
            <h3>Loading...</h3>
        </div>
        <div v-else>
            <div class="header card bg-custom text-light m-2 text-center">
                <h1>{{film.title}} {{film.original_title}}</h1>
                <h5>Directed by: {{film.director}}</h5>
                <p class="m-2" >{{film.description}}</p>
                <img :src="film.movie_banner" class="img-fluid" >
                <div class="d-flex justify-content-center mt-3">
                    <p class="mx-2">Release: {{film.release_date}}</p>
                    <p>Runtime: {{film.running_time}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

.bg-custom{
    background-color:  #716844;
}

</style>