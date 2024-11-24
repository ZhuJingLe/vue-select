<template>
  <div 
    class="z-select" 
    :style="{ height: Number(height)? (height + 'px'): height }"
    >
    <div class="z-input-wrap">
      <input class="z-select-input" />
    </div>
  </div>
</template>

<script>  
  export default {
    props: {
      height: {
        type: [String, Number],
        default: 32
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
.z-select {
  border: 1px solid #dcdfe6;
  width: 100%;
  display: flex;
  align-items: center;
  .z-select-input {
    background-color: transparent;
    width: 100%;
    outline: none;
    display: inline-block;
    border: none;
    height: 28px;
    margin-left: 10px;
  }
}
</style>