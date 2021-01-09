<template>
    <div>
        <div class="card-body bg-white m-4 justify-self-center  rounded-lg">
        <div class="p-2">
            <div class="text-center">
                    <img class="w-24 py-2 rounded-full mx-auto" :src="card.users.image" alt="">
                    <h6 class="pt-2 card-subtitle mb-2 font-bold">{{card.users.name}}</h6>
                    <p class="card-text pb-4">{{card.body}}</p>
                </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:["card"]
}
</script>
<style scoped>
   .card-body{
    min-width: 250px;
    }
</style>