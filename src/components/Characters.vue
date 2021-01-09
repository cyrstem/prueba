<template>
    <div>
        <p>Characters</p>
        <p>{{characters}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
name:'characters',
data() {
    return {
        characters:[]
    }
  },
  mounted() {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => (this.characters = res.data))
  },
}
</script>