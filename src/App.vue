<template>
  <div id="app">
    <h1>Tester</h1>
    <nav>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/episodes">Episodes</router-link>
      <router-view />
    </nav>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
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
a{
margin:5px
}
  nav{
        padding:15px;
        margin:15px;
    }
</style>
