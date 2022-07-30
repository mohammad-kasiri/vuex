<template>
  <div>
    <listOne></listOne>
    <hr>
    <ListTwo></ListTwo>
  </div>
</template>


<script>
import ListOne from '@/components/ListOne.vue'
import ListTwo from '@/components/ListTwo.vue'

export default {
  name: 'App',
  components: {
    ListOne , 
    ListTwo
  },
}
</script>
