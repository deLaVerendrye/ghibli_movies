<script>
export default{
    props: {
        image_src: String,
        title: String,
        director: String,
        date_release: String,
    }
}
</script>

<template>
    <div class="card m-2" style="width: 15rem;">
        <div class="image_div" >
            <img :src="image_src" :alt="title + ' poster'" class="card-img-top">
        </div>
        <div class="card-body text-light">
            <p class="card-text">{{title}} {{date_release}}</p>
            <p>by {{director}}</p>
        </div>
    </div>
</template>

<style scoped>

img{
    position: relative;
    left: 15%;
    top: 15%;
    width: 10rem;
    transform: scale(200%);
    transition: ease-in-out;
    transition-duration: 300ms;
}

img:hover{
    transform: scale(160%);
    transition: ease-in-out;
    transition-duration: 300ms;
}

.image_div{
    height: 20rem;
    max-height: 20rem;
    overflow: hidden;
}

.card{
    max-width: 15rem;
    overflow: hidden;
    max-height: 30rem;
    background-color: #39321a;
}

.card:hover{
    cursor: pointer;
}

.card-body{
    height: 7.5rem;
    max-height: 7.5rem;
    overflow: hidden;
}

</style>