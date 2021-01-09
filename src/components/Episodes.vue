<template>
    <div>
        <p>Episodes</p>
        <p>{{episodes}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
name:'episodes',
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