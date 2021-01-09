<template>
    <div>
        <Card v-for="character in characters" 
          :key="character.id" 
          character-list="character"/>
    </div>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card'
export default {
name:'characters',
props: ['characterList'],

components:{
  Card
}, 
data() {
    return {
        characters:{}
    }
  },
 async mounted() {
   try {
        const res = await axios.get(
          'https://rickandmortyapi.com/api/character/', {
          query: '{results{name,status}}'
        })
        this.characters = res.data.results
      } catch (e) {
        console.log('err', e)
      }
  }

}
</script>