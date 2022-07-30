<template>
    <div id="list-one">
      <h3 v-if="theSelectedCity">Population is {{theSelectedCity.population}}</h3>
      <ul>
        <li v-for="city in cities" :key="city.id" @click="chooseCity(city.id)">
          <b v-if="city.isYourChoice"> {{city.name}} </b>
          <span v-if="!city.isYourChoice"> {{city.name}} </span>
        </li>
      </ul>
    </div>
</template>

<script>
import {mapState }from 'vuex';
export default {
  name: 'listOne',
  data(){
    return {
      selectedCity : 0,
    }
  },
  computed: {
    ...mapState({
      cities : (state) => state.cities
    }),

    theSelectedCity(){
      return this.$store.getters.chooseCity(this.selectedCity)
    }
  },
  methods:{
    chooseCity(id){
      this.selectedCity = id;
      this.$store.dispatch('chooseCity' , id)
    }
  }
}
</script>

<style scoped>
#list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#list-one ul{
    padding: 0;
}
#list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
</style>