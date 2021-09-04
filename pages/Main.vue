<template>
  <div>
    <p>메인 페이지 입니다</p>
    <div>
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
        >
          <img :src="product.imageUrl" :alt="product.name"/>
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Main",
  // 페이지폴더 하위 페이지에서만 사용 가능함
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response);
    const products = response.data.map(item => ({
      ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
    }));
    return { products }
  },
  data() {
    return {
    }
  },

  async created() {

  }
}
</script>

<style scoped>

</style>
