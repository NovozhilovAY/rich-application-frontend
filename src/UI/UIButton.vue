<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UIButton"
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  border: none;
}
</style>