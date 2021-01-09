<template>
    <div class ="card">
           <p>{{name}}</p>
           <p>{{status}}</p>
           
           <p>{{air_date}}</p>
           <p>{{episode}}</p>
           
    </div>
</template>
<script>
export default {
    name:'Card',
     props: ['name','photo','status','air_date','episode'],

     created() {
         //console.log(this.user)
     },
    
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