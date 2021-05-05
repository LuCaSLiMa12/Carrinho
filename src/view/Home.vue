<template>
  <div>
    <navbar v-bind:store="store" v-bind:total="total"></navbar>

    <div class="container-fluid">
      <div class="row justify-content-center flex-wrap">
        <card class="card-size"
              v-for="prod in this.products.product.items"
              v-bind:key="prod.id"
              v-bind:product="prod"
              v-on:carrinho="pushShoppingCart"
        ></card>
      </div>
    </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue'
import Navbar from '../components/Navbar.vue'

const products = require('../api/products.json')


export default {
  name: 'App',
  data: function () {
    return {
      products,
      store: [],
      total: 0
    };
  },
  components: {
    Card,
    Navbar
  },
  methods: {
    pushShoppingCart(payload) {
      this.total += payload.payload.priceTags[0].value
      this.store.push(payload.payload)
    }
  }

}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}

.card-size {
  width: 30%;
}

@media screen and (max-width: 1091px) {
  .card-size {
    width: 50%;
  }
}

@media screen and (max-width: 593px) {
  .card-size {
    width: 100%;
  }
}


</style>
