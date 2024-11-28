<template>
  <div class="test">
    <zSelect style="width: 340px;" />
  </div>
</template>

<script>
import zSelect from './components/index.vue'
export default {
  components: { zSelect }
}
</script>

<style lang="scss">
.test {
  display: flex;
  justify-content: center;
  padding: 20%;
}
body {
  background: #504e4e;
}
</style>