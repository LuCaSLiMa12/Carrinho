<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-end" style="background-color: #d1d8e5">

      <router-link :to="{ name: 'carrinho', params: { products: this.$attrs }}">
        Meu carrinho
        <span v-if="numItems">{{ numItems }}</span>
        <img class="carrinho" src="../assets/img/carrinho-de-compras.svg" alt="">

      </router-link>

    </nav>
  </div>
</template>

<script>


export default {

  computed: {
    numItems: function () {
      return this.$attrs.store.length
    }
  }

}
</script>

<style scoped>

.carrinho {
  width: 25px;
}

a {
  text-decoration: unset;
  color: black;
}

span {
  color: #080705;
  position: absolute;
  margin: -9px 0px 0px 20px;
  font-weight: 900;
  font-size: 12px;
}

</style>