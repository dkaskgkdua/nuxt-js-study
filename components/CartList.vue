<template>
  <div class="list-wrapper">
    <ul>
      <li
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
        class="list-item"
      >
        <img
          :src="cartItem.imageUrl"
          :alt="cartItem.name"
          class="thumbnail"
        >
        <div class="description">
          <p> {{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import {FETCH_CART_ITEMS} from "~/store";

export default {
  name: "CartList",
  // 페이지 컴포넌트 속성에서만 asyncData 사용 가능함
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // }
  async fetch() {
    console.log(this)
    await this.$store.dispatch(FETCH_CART_ITEMS)
  }
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
</style>
