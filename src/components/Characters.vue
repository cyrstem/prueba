<template>
    <div>
        <Card v-for="character in characters" 
          :key="character.name" 
          :name="character.name"
          :status="character.status"
          />
    </div>
</template>
<script>
import axios from 'axios'
import Card from '@/components/Card'
export default {
name:'characters',
components:{
  Card
}, 
data() {
    return {
        characters:[]
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