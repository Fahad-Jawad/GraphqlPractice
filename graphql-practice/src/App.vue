<template>
  <div>
<h1>setup</h1>
<input type="text" v-model="variables.id">
<button @click="getGame()">get</button>
  </div>
</template>

<script setup>

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { ref } from 'vue';

const variables = ref({
  id: '1',
})
function getGame(){
  const { result } = useQuery(gql`
      query getGames($id: ID!) {
        getGame(id:$id) {
          id
          title
          price
          reviews{
            rating
          }
        }
      },
    `,variables)
    
console.log("res",result)
}

</script>

<style lang="scss" scoped>

</style>