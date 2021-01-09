<template>
    <div>
        <Card
         v-for="episode in episodes" 
         :key="episode.name"
         :name="episode.name"
         :air_date="episode.air_date"
         :episode="episode.episode"
        />
        
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
   async mounted() {
   try {
        const res = await axios.get(
          'https://rickandmortyapi.com/api/episode/', {
          query: '{results{name,air_date,episode}}'
        })
        this.episodes = res.data.results
        
      } catch (e) {
        console.log('err', e)
      }
  }
}
</script>