<template>
  <div>
    <header class="title">
      <NuxtLink
        to = "/"
        class="logo"
      >
        Nuxt Shopping(AL)
      </NuxtLink>
    </header>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {
  name: "AnotherLayout"
}
</script>

<style scoped>

header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
