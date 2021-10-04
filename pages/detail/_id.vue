<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
<!--        <NuxtLink></NuxtLink>-->
      </div>
    </div>
  </div>
</template>

<script>
import {fetchProductById, createCartItem} from "~/api";

export default {
  name: "Id",
  async asyncData({ params }) {
    const response = await fetchProductById(params.id);
    const product = response.data
    return { product }
  },
  // 동적
  head() {
    return {
      title: `상품 상세 페이지 - ${this.product.name}`,
      meta: [
        {
          // hid 값이 같아야 nuxt.config 파일의 값을 대체가능함
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다.`
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `상품 상세 페이지`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `이 상품은 ${this.product.name}입니다.`
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.product.imageUrl
        },
      ]
    }
  },
  // 정적
  // head: {
  //   title: 'Shopping Item',
  //   meta: [
  //     {
  //       hid : 'description',
  //       name : 'description',
  //       content: '이 상품은 ~~입니다.',
  //     },
  //   ],
    // links: [
    //   {
    //     rel: 'stylesheet',
    //     href: '',
    //   }
    // ]
  // },
  methods: {
    async addToCart() {
      // await createCartItem(this.product)
      const response = await createCartItem(this.product);
      console.log(response);
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
