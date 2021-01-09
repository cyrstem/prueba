<template>
    <div>
        <Card v-for="episode in episodes" :key="episode.id"  />
        <p>{{episodes}}</p>
    </div>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card'
export default {
name:'episodes',
components:{
    Card
},
data() {
    return {
        episodes:[]
    }
  },
  mounted() {
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => (this.episodes = res.data))
  },
}
</script>