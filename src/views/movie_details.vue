<script>
export default{
    data(){
        return {
            film: null,
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
    <div v-if="!film" >
        <h1>Loading...</h1>
    </div>
    <div v-else>
        {{film}}
    </div>
</div>
</template>
