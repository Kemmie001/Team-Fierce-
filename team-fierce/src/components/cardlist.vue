<template>
    <div class="section-3  my-2">
        <Cardslide v-for="card in cards" :key="card.id" :card="card"/>

    </div> 
</template>
<script>
import Cardslide from "../components/cardslide"

export default {
    components:{
    Cardslide
    },
    computed:{
        cards(){
            return this.$store.state.cards;
        }
    },
    mounted(){
        this.$store.dispatch('getCards');

    },
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
   .section-3{
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns:1fr 1fr 1fr;
    overflow-x:scroll;
    cursor:pointer;
    scrollbar-width: thin;
   -ms-overflow-style: thin; 
   scrollbar-color:rgba(172, 185, 211, 0.2) transparent;
}
.section-3::-webkit-scrollbar{
    width: 10px;
}
.section-3::-webkit-scrollbar-track{
    background: transparent;
   
}
.section-3::-webkit-scrollbar-thumb{
    background:rgba(172, 185, 211, 0.2);
    border-radius: 6rem;
    width: 2px;
}
</style>