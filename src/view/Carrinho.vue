<template>
  <div class="d-flex justify-content-center align-items-center" style="background-color: #d1d8e5;">

    <div class="w-100 d-flex flex-column justify-content-center align-items-center" style="height: 100vh" v-if="this.$route.params.products == undefined">
      <img style="max-width: 400px;" :src="box" alt="">
      <p class="pt-3">Oops parece que voce não adicionou nenhum item</p>
    </div>
    <div v-else>
        <div>
          <div class="d-flex justify-content-center">
            <div class="card my-5" style="border-radius: 12px;box-shadow: 0.1px 4px 7px #00000047;">
              <div class="card-header bg-transparent text-center title-car">Meu carrinho</div>
              <div class="card-body">

                <div v-for="(item) in this.params.products.store" :key="item.id" class="mb-4 d-flex flex-row flex-wrap">
                  <div><img class="carrinho-img--style" :src="item.imageUrl" alt=""></div>
                  <div class="carrinho-text--style">
                    <p class="name-item-card">{{ item.name }}</p>
                    <p style="color: #c9dada; font-size: 14px">R$ {{ item.priceTags[0].value*-1 }}</p>
                    <p class="price-item-card">R$ {{ item.priceTags[0].value*-1 }}</p>
                  </div>
                </div>


              </div>
              <hr>
              <div class="card-body d-flex flex-column align-items-center">
                <div class="d-flex flex-row justify-content-between w-100">
                  <h5 class="card-title">Total</h5>
                  <p class="card-text">R$ {{ total }}</p>
                </div>

                <p v-if="this.params.products.total*-1 > 10" class=" my-3 alerta alert-warning text-center" style="font-weight: 500;" role="alert">
                  Parabéns, sua compra tem frete grátis !
                </p>
              </div>
              <div class="card-footer bg-transparent d-flex justify-content-center ">
                <button class="btn btn-primary w-100">
                  Finalizar compra
                </button>
              </div>
            </div>

          </div>
        </div>
    </div>


  </div>
</template>

<script>


import box from '../assets/img/box-empty.gif';

export default {
  data: function () {
    return {
      box: box
    };
  },
  computed:{
    params: function () {
      return this.$route.params
    },
    total: function (){
      return this.params.products.total*-1
    }
  }

}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

*{
  font-family: 'Poppins', sans-serif;
}


.btn{
  height: 60px;
  font-weight: 700;
  font-size: 21px;
  height: 60px
}

.carrinho-img--style{
  width: 113px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 0 10px;
}

.carrinho-text--style{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media screen and (min-width: 496px){
  .carrinho-text--style{
    padding-left: 1rem
  }
}

.alerta{
  position: relative;
  padding: 7px 8px;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 8.25rem;
}

.title-car{
  font-size: 30px;
  font-weight: 700;
}

.name-item-card{
  font-weight: 900;
  line-height: unset !important;
}
.price-item-card{
  font-weight: 700;
}

.carrinho-text--style p{
  padding: 0px;
  line-height: 6px;
}

h5.card-title, p.card-text{
  font-weight: 900;
  font-size: 24px;
}

.card{
  width: 496px;
}
@media screen and (max-width: 495px){
  .card{
    width: 78%;
  }
}


</style>
