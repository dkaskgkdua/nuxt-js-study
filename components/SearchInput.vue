<template>
  <div>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <button>search</button>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>

</style>
