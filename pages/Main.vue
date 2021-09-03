<template>
  <div>
    <p>메인 페이지 입니다</p>
    <ProductList
    >
    </ProductList>
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
    const products = response.data;
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
