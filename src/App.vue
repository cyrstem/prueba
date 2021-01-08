<template>
  <div id="app">
        <button v-on:click="epi()" class="btn">Episodes</button>
        <button v-on:click="char()" class="btn">Characters</button>
    <div id="container">
      <Card v-bind:episodes="episodes"/>

    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
//import Episodes from './components/Episodes.vue'
//import Characters from './components/Characters.vue'
export default {
  name: 'App',
  components: {
    Card
   // Episodes,
    //Characters
  },
  data() {
    return {
      episodes:[
        {
        name: "episode1",
        air_date: '10-10-21',
        episode: '1'
      },
        {
        name:"episode2",
        air_date: '10-10-21',
        episode: '2'
      },
        {
        name:"episode3",
        air_date: '12-10-21',
        episode: '3'
      }
      ]
    }
  },
  methods:{
      epi(){
       
        console.log("episodes")
      },
      char(){
        
        console.log("show")
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#container{
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  gap: 30px;
  grid-auto-rows: minmax(100px, auto);
  padding: 10px;

}
.btn{
  width: 200px;
  height: 30px;
  background: black;
  color: white;
}
.btn:hover{
  background: white;
  color:black;
}
</style>
