<template>
    <div>
        <div v-bind:key="episode.id" v-for ="episode in episodes">
            <CardItem v-bind:episodes ="episodes"/>
        </div>
    </div>
</template>
<script>
import CardItem from './CardItem'
export default {
    name:"Cards",
    components:{
        CardItem
    },
        props:["episodes"]
}
</script>
<style scoped>
 .card{
     border-width: 1px;
     border-radius: 4px;
     border-style: solid;
     border-color: black;
     color: black;
 }
</style>