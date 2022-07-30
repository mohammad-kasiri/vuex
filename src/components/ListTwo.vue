<template>
    <div id="list-two">
      <h3>Chosen Cities ({{citiesCount ?? 0}})</h3>
      <ul>
        <li v-for="city in cities" :key="city.id" @click="chooseCity(city.id)" >
          <b v-if="city.isYourChoice"> {{city.name}} </b>
          <span v-if="!city.isYourChoice"> {{city.name}} </span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'ListTwo',
  computed:{
    cities(){
      return this.$store.getters.chosenCities;
    },
    citiesCount(){
      return this.$store.getters.chosenCitiesCount;
    }
  },
  methods:{
    chooseCity(id) {
      this.$store.dispatch('chooseCity' , id);
    }
  }
}
</script>


<style scoped>
#list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#list-two ul{
    padding: 0;
    list-style-type: none;
}
#list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
</style>