<template>
    <div class ="card">
           <p>{{characterList}}</p>
    </div>
</template>
<script>
export default {
    name:'Card',
     props: ['characterList']
    
}
</script>
<style scoped>
 .card{
     height: 15vh;
     border-width: 1px;
     border-radius: 4px;
     border-style: solid;
     border-color: black;
     color: black;
     margin: 10px;
 }
</style>